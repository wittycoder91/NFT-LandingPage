import React, { ReactElement } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { bgFeatureDetail, arrowIcon, closeIcon } from '../assets';
import jobRolesData from '../data/jobRoles.json';

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

// Job role component to avoid repetition
interface JobRoleProps {
  id: number;
  title: string;
  description: string;
}

const JobRole: React.FC<JobRoleProps> = ({ id, title, description }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/careerdetail?id=${id}`);
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center bg-white/10 rounded-[45px] py-4 px-6 md:py-7 md:px-10 md:gap-4 cursor-pointer min-w-max w-full"
      onClick={handleClick}
    >
      <p className="text-white text-[18px] md:text-2xl font-medium">{title}</p>
      <div className="flex items-center gap-4">
        <p className="text-white opacity-50 text-base md:text-[21px]">
          {description}
        </p>
        <Image src={arrowIcon} alt="Arrow" width={24} height={24} />
      </div>
    </div>
  );
};

const Featuredetail: PageWithCustomLayout = () => {
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
            <Link href="/" passHref>
              <div className="flex items-start mt-5 sm:mt-8 justify-center xl:justify-start min-w-[250px] w-max">
                <div className="flex items-center">
                  <div className="bg-[#D9D9D9] rounded-full w-2 h-2 opacity-20" />
                  <div className="border-b border-[#D9D9D9] rounded-full w-[53px] opacity-20" />
                  <div className="bg-white/10 rounded-[45px] py-4 px-5 flex items-center gap-4 cursor-pointer">
                    <Image src={closeIcon} alt="Close" width={24} height={24} />
                    <span className="text-base text-white font-medium">
                      Close
                    </span>
                  </div>
                  <div className="border-b border-[#D9D9D9] rounded-full w-[53px] opacity-20" />
                  <div className="bg-[#D9D9D9] rounded-full w-2 h-2 opacity-20" />
                </div>
              </div>
            </Link>
          </div>

          {/* Job listings */}
          <div className="flex flex-col gap-5 md:min-w-[650px]">
            <p className="text-white opacity-50 text-base md:text-[21px]">
              Open roles
            </p>

            {jobRolesData.jobRoles.map((job) => (
              <JobRole
                key={job.id}
                id={job.id}
                title={job.title}
                description={job.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Use custom layout without header
Featuredetail.getLayout = (page: ReactElement) => (
  <NoHeaderLayout>{page}</NoHeaderLayout>
);

export default Featuredetail;
