import React from 'react';

import Image from 'next/image';

import { bgAbout } from '../assets';
// import About from '../components/About';
import About from '../components/About';
import Features from '../components/Features';
import MainHero from '../components/MainHero';
import Mint from '../components/Mint';

const App = () => {
  return (
    <div className={`grid overflow-hidden`}>
      <div className="relative h-[100vh]">
        <Image
          src={bgAbout}
          alt="Background"
          className="object-cover"
          layout="fill"
          priority
        />
        <MainHero />
      </div>
      <About />
      <Mint />
      <Features />
      {/* <LazyShow>
        <About />
      </LazyShow> */}
    </div>
  );
};

export default App;
