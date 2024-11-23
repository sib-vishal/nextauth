"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                alt="Logo"
                width={150} 
                height={32} 
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

           
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

      
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link href="/features" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
              Features
            </Link>

            <Link href="/solutions" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
              Solutions
            </Link>

            <Link href="/resources" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
              Resources
            </Link>

            <Link href="/pricing" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
              Pricing
            </Link>

            <div className="w-px h-5 bg-black/20"></div>

            <Link href="/login" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
              Log in
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              Try for free
            </Link>
          </div>
        </div>
      </div>

     
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Link
          href="/features"
          className="block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 py-2"
        >
          Features
        </Link>
        <Link
          href="/solutions"
          className="block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 py-2"
        >
          Solutions
        </Link>
        <Link
          href="/resources"
          className="block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 py-2"
        >
          Resources
        </Link>
        <Link
          href="/pricing"
          className="block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 py-2"
        >
          Pricing
        </Link>
        <div className="w-px h-5 bg-black/20 my-2"></div>
        <Link
          href="/login"
          className="block text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 py-2"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="block text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white py-2 px-5"
        >
          Try for free
        </Link>
      </div>
    </header>
  );
};

export default Header;
