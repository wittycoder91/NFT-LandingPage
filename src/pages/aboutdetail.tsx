import React, { ReactElement } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { bgAboutDetail, closeIcon } from '../assets';

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

const AboutDetailPage: PageWithCustomLayout = () => {
  return (
    <div className="relative h-[100vh] min-h-[100vh]">
      <Image
        src={bgAboutDetail}
        alt="Background"
        className="object-cover"
        layout="fill"
        priority
      />

      <div className="relative z-10 max-w-7xl text-white mx-auto h-full flex items-center justify-evenly lg:justify-end mb-24 px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Title */}
          <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl leading-none text-center lg:text-left">
            About GenAuxi
          </h1>

          {/* Close button */}
          <div className="flex items-start mt-5 sm:mt-8 justify-center lg:justify-start w-full min-w-[250px]">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="bg-[#D9D9D9] rounded-full w-2 h-2 opacity-20" />
                <div className="border-b border-[#D9D9D9] rounded-full w-[53px] opacity-20" />
                <Link href="/" passHref>
                  <div className="bg-white/10 rounded-[45px] py-4 px-5 flex items-center gap-4 cursor-pointer">
                    <Image src={closeIcon} alt="Close" width={24} height={24} />
                    <span className="text-base text-white font-medium">
                      Close
                    </span>
                  </div>
                </Link>
                <div className="border-b border-[#D9D9D9] rounded-full w-[53px] opacity-20" />
                <div className="bg-[#D9D9D9] rounded-full w-2 h-2 opacity-20" />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 text-xl sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 lg:text-3xl xl:text-[44px] lg:mx-0 text-center lg:text-left">
            GenAuxi is pioneering the future of Web3 commerce by merging
            blockchain utility with real-world value. We&apos;re setting a new
            standard for how digital assets empower ownership, access, and
            innovation in the consumer landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

// Use custom layout without header
AboutDetailPage.getLayout = (page: ReactElement) => (
  <NoHeaderLayout>{page}</NoHeaderLayout>
);

export default AboutDetailPage;
