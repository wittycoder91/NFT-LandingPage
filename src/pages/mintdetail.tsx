import React, { ReactElement, useState } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { bgAboutDetail, closeIcon } from '../assets';
import CountdownTimer from '../components/CountdownTimer';

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

const MintDetailPage: PageWithCustomLayout = () => {
  const targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Example values for modal
  const quantity = 100;
  const ethAmount = 1.2;
  const usdAmount = 3500;

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
        <div className="flex flex-col lg:flex-row lg:gap-6 xl:gap-12">
          <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl leading-none text-center lg:text-left">
            About GenAuxi
          </h1>
          <div className="flex items-center lg:items-start mt-5 sm:mt-8 justify-center lg:justify-start w-full">
            <div className="flex items-center justify-center w-[250px]">
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

          {/* Right: Timer, Description, Wallet, Info */}
          <div className="flex flex-col items-center w-full max-w-2xl gap-8">
            {/* Countdown Timer */}
            <CountdownTimer targetDate={targetDate} />

            {/* Connect Wallet Button */}
            <button className="w-full rounded-[45px] bg-white/10 py-6 text-lg font-medium text-white shadow-lg hover:bg-white/20 transition mb-2">
              Connect wallet
            </button>

            {/* Mint Quantity and Button */}
            <div className="w-full flex items-center bg-white/10 rounded-[32px] px-6 py-3 mb-8 border border-white/20 shadow-inner">
              <span className="text-lg md:text-lg text-white/80 font-medium mr-2">
                Quantity:
              </span>
              <span className="text-lg md:text-lg text-white font-semibold mr-auto">
                100
              </span>
              <button
                className="bg-white text-black font-medium rounded-full px-6 py-2 ml-4 transition hover:bg-gray-200"
                onClick={() => setModalOpen(true)}
              >
                Mint now
              </button>
            </div>

            {/* Info: Supply & Price */}
            <div className="flex w-full gap-8 justify-center">
              <div className="flex-1 bg-white/10 rounded-[32px] py-8 flex flex-col justify-between pl-[40px] h-36 md:h-32">
                <span className="text-base text-white/70 mb-2">
                  Supply remaining
                </span>
                <span className="text-xl md:text-3xl font-semibold">100</span>
              </div>
              <div className="flex-1 bg-white/10 rounded-[32px] py-8 flex flex-col justify-between text-right pr-[40px] h-36 md:h-32">
                <span className="text-base text-white/70 mb-2">Price</span>
                <span className="text-xl md:text-3xl font-semibold">
                  0.3 ETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Success Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center z-50 pointer-events-none">
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="h-20 w-0.5 border-l-2 border-white/20"></div>
            </div>
            <div className="relative bg-[#FFFFFF14] rounded-[48px] px-10 py-12 flex flex-col items-center w-[90vw] max-w-md shadow-2xl backdrop-blur-md z-50">
              {/* Modal content */}
              <div className="text-4xl font-semibold mb-2 text-white">
                {quantity}
              </div>
              <div className="text-base text-white/80 mb-6">
                {ethAmount} ETH = ${usdAmount.toLocaleString()}
              </div>
              <div className="text-2xl font-semibold mb-6 text-white">
                Successfully purchased
              </div>
              <button className="w-full mb-4 rounded-[32px] bg-white/20 py-4 text-center text-base text-white hover:bg-white/30 transition hover:border-none">
                View on OpenSea
              </button>
              <button className="w-full mb-4 rounded-[32px] bg-white/20 py-4 text-center text-base text-white hover:bg-white/30 transition hover:border-none">
                View on wallet
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white hover:bg-white/20 transition pb-[6px]"
              >
                ×
              </button>
            </div>
            {/* Bottom vertical line and circle */}
            <div className="flex flex-col items-center z-50 pointer-events-none">
              <div className="h-20 w-0.5 border-l-2 border-white/20"></div>
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Use custom layout without header
MintDetailPage.getLayout = (page: ReactElement) => (
  <NoHeaderLayout>{page}</NoHeaderLayout>
);

export default MintDetailPage;
