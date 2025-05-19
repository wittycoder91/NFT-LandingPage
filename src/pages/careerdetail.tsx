import React, { ReactElement } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { bgFeatureDetail, backIcon } from '../assets';
import careerDetailsData from '../data/careerDetails.json';

// Simple layout without header
const NoHeaderLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow relative">{children}</main>
  </div>
);

type PageWithCustomLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

const Careerdetail: PageWithCustomLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const careerDetail = careerDetailsData.careerDetails.find(
    (detail) => detail.id === Number(id)
  );

  if (!careerDetail) {
    return <div>Career not found</div>;
  }

  return (
    <div className="relative min-h-[100vh] py-32">
      <Image
        src={bgFeatureDetail}
        alt="Background"
        className="object-cover"
        layout="fill"
        priority
      />
      <div className="relative z-10 max-w-7xl text-white mx-auto h-full flex items-center justify-center xl:justify-end mb-24 px-8 lg:px-14">
        <div className="flex flex-col xl:flex-row gap-4 2xl:gap-12">
          {/* Title */}
          <h1 className="tracking-tight font-bold sm:text-5xl text-4xl md:text-5xl lg:text-6xl leading-none text-center xl:text-left">
            Careers GenAuxi
          </h1>

          {/* Close button */}
          <div className="flex justify-center items-center xl:items-start">
            <Link href="/featuredetail" passHref>
              <div className="flex items-start mt-5 sm:mt-8 justify-center xl:justify-start min-w-[250px] w-max">
                <div className="flex items-center">
                  <div className="bg-[#D9D9D9] rounded-full w-2 h-2 opacity-20" />
                  <div className="border-b border-[#D9D9D9] rounded-full w-[53px] opacity-20" />
                  <div className="bg-white/10 rounded-[45px] py-4 px-5 flex items-center gap-4 cursor-pointer">
                    <Image src={backIcon} alt="Close" width={24} height={24} />
                    <span className="text-base text-white font-medium">
                      Back
                    </span>
                  </div>
                  <div className="border-b border-[#D9D9D9] rounded-full w-[53px] opacity-20" />
                  <div className="bg-[#D9D9D9] rounded-full w-2 h-2 opacity-20" />
                </div>
              </div>
            </Link>
          </div>

          {/* Job details */}
          <div className="flex flex-col gap-8 md:min-w-[650px]">
            <p className="text-white opacity-50 text-base md:text-[21px]">
              {`${careerDetail.type} | ${careerDetail.location}`}
            </p>
            <p className="text-white font-semibold text-[28px] lg:text-[36px] xl:text-[44px] leading-none">
              {careerDetail.title}
            </p>
            <p className="text-white opacity-50 text-base md:text-[18px]">
              {careerDetail.description}
            </p>
            <a
              href={careerDetail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-2xl text-center text-white bg-white/10 rounded-[45px] py-4 px-6 md:px-10 md:gap-4 cursor-pointer min-w-max w-full hover:border-none"
            >
              Send my CV
            </a>
            {/* Dynamic Sections */}
            {careerDetail.sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-11 items-start"
              >
                <div className="w-44 flex-shrink-0">
                  <h2 className="text-white text-xl font-semibold text-left">
                    {section.title}
                  </h2>
                </div>
                <ul className="list-disc list-inside text-white/70 space-y-2 flex-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Use custom layout without header
Careerdetail.getLayout = (page: ReactElement) => (
  <NoHeaderLayout>{page}</NoHeaderLayout>
);

export default Careerdetail;
