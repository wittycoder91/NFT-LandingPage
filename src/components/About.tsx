import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { bgAbout } from '../assets';

const About = () => {
  return (
    <div className="relative h-[1000px]" id="about">
      <Image
        src={bgAbout}
        alt="Background"
        className="object-cover"
        layout="fill"
        priority
      />
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center lg:justify-end mb-24">
        <div className={`lg:max-w-2xl lg:w-full`}>
          <div className="px-4 sm:px-6 g:pr-14 lg:pl-48">
            <div className="sm:text-center lg:text-left text-white">
              <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl leading-none text-center lg:text-left">
                About GenAuxi
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center lg:text-left">
                This isn&apos;t just blockchain. This is GenAuxi — where your
                asset is a flex, a pass, and a profit move.
              </p>
              <div className="flex flex-col items-center mt-5 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start gap-6 sm:gap-[10px]">
                <div className="rounded-md shadow">
                  <Link href="/aboutdetail" passHref>
                    <div className="cursor-pointer">
                      <button
                        className={`w-max flex items-center justify-center px-8 py-3 text-base font-medium rounded-[32px] text-black bg-white md:py-4 md:text-lg md:px-10 hover:border-none`}
                      >
                        About GenAuxi
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
