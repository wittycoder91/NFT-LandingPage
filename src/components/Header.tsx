import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

import { logo, searchIcon } from '../assets';

const Menu = () => {
  const navigation = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Mint',
      href: '#mint',
    },
    {
      name: 'Features',
      href: '#features',
    },
  ];

  const handleScrollToSection = (
    e: React.MouseEvent,
    href: string,
    close?: () => void
  ) => {
    e.preventDefault();

    // Get the target element
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Close mobile menu if function is called with close parameter
      if (close) {
        close();
      }

      // Smooth scroll to the element
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Popover>
      {({ close }) => (
        <>
          <div className="relative pt-8 px-4 sm:px-10 lg:px-14 w-full">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/" passHref>
                    <div className="cursor-pointer">
                      <Image
                        src={logo}
                        alt="logo"
                        className="sticky top-0 mb-28 object-cover"
                        width="37"
                        height="36"
                      />
                    </div>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button
                      className={`bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset`}
                    >
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:ml-10 md:pr-4 flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center justify-center gap-8">
                  <div className="relative w-60 h-11 rounded-[64px]">
                    <div className="absolute top-3 left-4">
                      <Image
                        src={searchIcon}
                        alt="searchIcon"
                        className="sticky top-0 mb-28 object-cover"
                        width="16"
                        height="16"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full h-full text-white bg-white/10 p-2 rounded-[64px] focus:outline-none pl-10"
                    />
                  </div>
                  <div className="flex md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleScrollToSection(e, item.href)}
                        className="cursor-pointer font-medium text-white hover:text-gray-400 hover:border-none"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <button className="flex items-center justify-center font-medium bg-white text-black rounded-[64px] w-36 h-11">
                  Connect Wallet
                </button>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                className={`rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden`}
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <Link href="/" passHref>
                      <div className="cursor-pointer">
                        <Image
                          src={logo}
                          alt="logo"
                          className="sticky top-0 mb-28 object-cover"
                          width="37"
                          height="36"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className={`bg-black rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset`}
                    >
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="relative w-full h-11 rounded-[64px] mt-4">
                  <div className="absolute top-3 left-4">
                    <Image
                      src={searchIcon}
                      alt="searchIcon"
                      className="sticky top-0 mb-28 object-cover"
                      width="16"
                      height="16"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-full text-white bg-white/10 p-2 rounded-[64px] focus:outline-none pl-10"
                  />
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) =>
                        handleScrollToSection(e, item.href, close)
                      }
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:border-none cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="flex items-center justify-center mb-4">
                  <button className="flex items-center justify-center font-medium bg-white text-black rounded-[64px] w-36 h-11">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Menu;
