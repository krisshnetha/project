"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  Search,
  Phone,
  Heart,
  ShoppingBag,
  MapPin,
  ChevronDown,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#a88566]/95 backdrop-blur-md shadow-lg border-b border-[#927154]"
            : "bg-[#a88566] border-b border-[#927154]/80"
          }`}
      >
        <div
          className={`max-w-[1440px] mx-auto flex items-center px-6 md:px-12 lg:px-20 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
            }`}
        >
          {/* LEFT NAV */}
          <nav className="hidden lg:flex items-center justify-start gap-10 w-[32%]">
            <a
              href="#"
              className="relative text-[14px] uppercase tracking-[0.25em] font-medium text-white/95 hover:text-white transition duration-300 group"
              style={{ fontFamily: "serif" }}
            >
              Home
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>

            <a
              href="#"
              className="relative text-[14px] uppercase tracking-[0.25em] font-medium text-white/95 hover:text-white transition duration-300 group"
              style={{ fontFamily: "serif" }}
            >
              About
              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>

            {/* SHOP DROPDOWN */}
            <div className="relative group">
              <button
                className="relative py-2 flex items-center gap-1 text-[14px] uppercase tracking-[0.25em] font-medium text-white/95 hover:text-white transition duration-300"
                style={{ fontFamily: "serif" }}
              >
                Shop

                <ChevronDown
                  size={12}
                  className="text-white/70 transition-transform duration-300 group-hover:rotate-180"
                />

                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              </button>

              {/* DROPDOWN */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#fdfaf7] border border-[#e8ddd2] shadow-2xl rounded-2xl p-5 transition-all duration-300 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-50">
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <a
                      href="#"
                      className="block text-[14px] text-[#4a2d23] hover:text-[#9b6b43] transition"
                      style={{ fontFamily: "serif" }}
                    >
                      Necklaces
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block text-[14px] text-[#4a2d23] hover:text-[#9b6b43] transition"
                      style={{ fontFamily: "serif" }}
                    >
                      Earrings
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block text-[14px] text-[#4a2d23] hover:text-[#9b6b43] transition"
                      style={{ fontFamily: "serif" }}
                    >
                      Rings
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block text-[14px] text-[#4a2d23] hover:text-[#9b6b43] transition"
                      style={{ fontFamily: "serif" }}
                    >
                      Bracelets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div className="lg:hidden flex-1">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-white/80 transition-colors p-2"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center gap-3 w-full lg:w-[36%]">
            {/* LOGO */}
            <div
              className={`transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"
                }`}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 text-white stroke-current fill-none"
                strokeWidth="1"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="28"
                  className="stroke-[0.75] stroke-white/80"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="14"
                  className="stroke-[0.75] stroke-white/80"
                />

                <circle cx="50" cy="50" r="2.5" className="fill-white" />

                <path
                  d="M 50 12 L 47 42 L 50 46 L 53 42 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 50 88 L 47 58 L 50 54 L 53 58 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 12 50 L 42 47 L 46 50 L 42 53 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 88 50 L 58 47 L 54 50 L 58 53 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 77 23 L 56 41 L 53 47 L 59 44 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 23 77 L 44 59 L 47 53 L 41 56 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 23 23 L 41 44 L 47 47 L 44 41 Z"
                  className="fill-white stroke-none"
                />

                <path
                  d="M 77 77 L 59 56 L 53 53 L 56 59 Z"
                  className="fill-white stroke-none"
                />

                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="80"
                  className="stroke-white/40 stroke-[0.5]"
                />

                <line
                  x1="20"
                  y1="50"
                  x2="80"
                  y2="50"
                  className="stroke-white/40 stroke-[0.5]"
                />
              </svg>
            </div>

            {/* BRAND */}
            <div className="flex flex-col text-left justify-center pl-3 border-l border-white/20">
              <span
                className="text-white tracking-[0.2em] uppercase font-bold leading-none text-2xl md:text-3xl"
                style={{ fontFamily: "serif" }}
              >
                ASM
              </span>

              <span
                className="text-white/90 text-[10px] md:text-[11px] tracking-[0.25em] uppercase italic font-light mt-1"
                style={{ fontFamily: "serif" }}
              >
                Jewellery House
              </span>
            </div>
          </div>

          {/* RIGHT NAV */}
          <nav className="hidden lg:flex items-center justify-end gap-10 w-[32%]">
            {/* SERVICES */}
            <div className="relative group">
              <button
                className="relative py-2 flex items-center gap-1 text-[14px] uppercase tracking-[0.25em] font-medium text-white/95 hover:text-white transition duration-300"
                style={{ fontFamily: "serif" }}
              >
                Services

                <ChevronDown
                  size={12}
                  className="text-white/70 transition-transform duration-300 group-hover:rotate-180"
                />

                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              </button>
            </div>

            <a
              href="#"
              className="relative text-[14px] uppercase tracking-[0.25em] font-medium text-white/95 hover:text-white transition duration-300 group"
              style={{ fontFamily: "serif" }}
            >
              Blog

              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>

            <a
              href="#"
              className="relative text-[14px] uppercase tracking-[0.25em] font-medium text-white/95 hover:text-white transition duration-300 group"
              style={{ fontFamily: "serif" }}
            >
              Contact

              <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 md:gap-5 text-white lg:ml-6">
            <button
              className="p-2 text-white/90 hover:text-white transition"
              title="Search"
            >
              <Search size={18} />
            </button>

            <button
              className="relative p-2 text-white/90 hover:text-white transition"
              title="Wishlist"
            >
              <Heart size={18} />

              <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#5a2212] text-[8px] font-bold text-white">
                0
              </span>
            </button>

            <button
              className="p-2 text-white/90 hover:text-white transition"
              title="Cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* BOTTOM INFO BAR */}
      <div className="w-full bg-[#f6efe6] border-b border-[#e5d5c5]/80 py-3 text-xs md:text-sm text-[#7c6350] tracking-wider">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0">
          <div
            className="text-center font-medium md:border-r border-[#e5d5c5]/60 px-4"
            style={{ fontFamily: "serif" }}
          >
            100% Satisfaction Guaranteed
          </div>

          <div
            className="text-center font-medium md:border-r border-[#e5d5c5]/60 px-4"
            style={{ fontFamily: "serif" }}
          >
            24 Karat Gold and Platinum Jewelry
          </div>

          <div
            className="text-center font-medium px-4"
            style={{ fontFamily: "serif" }}
          >
            Support Local Artisans
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;