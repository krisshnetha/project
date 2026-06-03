import React from 'react';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafc] py-6 px-6 md:px-12 lg:px-20">
      {/* Main Footer Container */}
      <div className="relative w-full bg-[#300708] rounded-xl overflow-hidden mx-auto max-w-[1600px]">

        {/* Top Border Curve Overlay (Desktop only) */}
        <Image width={500} height={500}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-[18px] md:h-[30px] hidden md:block z-0 pointer-events-none object-fill"
          src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw20a12c74/images/footer/top-bottom-border-curve.png"
          alt="Border Curve Top"
        />

        {/* Bottom Border Curve Overlay (Desktop only) */}
        <Image width={500} height={500}
          loading="lazy"
          className="absolute bottom-0 left-0 w-full h-[18px] md:h-[30px] hidden md:block rotate-180 z-0 pointer-events-none object-fill"
          src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw20a12c74/images/footer/top-bottom-border-curve.png"
          alt="Border Curve Bottom"
        />

        <div className="relative z-10 container mx-auto px-6 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:px-8">

            {/* Left Column: Logo, QR Code & Apps */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-center">
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {/* LOGO */}
                <div className="transition-all duration-300">
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
                    Jewellery
                  </span>
                </div>
              </div>



              {/* App Download (Desktop) */}
              <div className="hidden md:flex flex-col items-center w-full">
                <p className="text-white mb-4 font-serif text-[17px]">Download the ASM Jewellery App Now</p>
                <div className="flex justify-center mb-6">
                  <Image width={500} height={500}
                    loading="lazy"
                    src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw24e8a742/images/footer/tanishq-app-QR-code-updated.svg"
                    alt="QR Code"
                    className="w-[200px] h-[200px]"
                  />
                </div>
                <div className="flex gap-4">
                  <a href="https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf3971307/images/footer/footer-playstore.svg" alt="Play Store" />
                  </a>
                  <a href="https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9d356b9/images/footer/footer-ios.svg" alt="App Store" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Links, Social, Payments */}
            <div className="w-full lg:w-2/3 flex flex-col lg:pt-16">

              {/* Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                {/* Useful Links */}
                <div>
                  <h3 className="text-[#E6C9A8] font-serif text-[18px] mb-5 tracking-wide">Useful Links</h3>
                  <div className="flex flex-col gap-3 text-[13px] text-gray-300">
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Delivery Information</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">International Shipping</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Payment Options</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Track your Order</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Returns</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Find a Store</a>
                  </div>
                </div>

                {/* Information */}
                <div>
                  <h3 className="text-[#E6C9A8] font-serif text-[18px] mb-5 tracking-wide">Information</h3>
                  <div className="flex flex-col gap-3 text-[13px] text-gray-300">
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Blog</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Offers & Contest Details</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">Help & FAQs</a>
                    <a href="#" className="hover:text-[#E6C9A8] transition-colors">About ASM</a>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <h3 className="text-[#E6C9A8] font-serif text-[18px] mb-5 tracking-wide">Contact Us</h3>
                  <div className="flex flex-col gap-4 text-[13px] text-gray-300">
                    <a href="tel:18002966677" className="hover:text-[#E6C9A8] transition-colors">
                      1800-296-6677


                    </a>

                    <div className="mt-1">
                      <h3 className="text-[#E6C9A8] font-serif text-[18px] mb-3 tracking-wide">Chat With Us</h3>
                      <a href="https://api.whatsapp.com/send?phone=8147349242" className="hover:text-[#E6C9A8] transition-colors">
                        +91 8147349242
                      </a>
                    </div>

                    <div className="flex gap-5 mt-2">
                      <a href="https://api.whatsapp.com/send?phone=8147349242" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd94cc295/images/footer/footer-whatsapp.svg" alt="Whatsapp" className="w-[18px] h-[18px]" />
                      </a>
                      <a href="mailto:ecomsupport@titan.co.in" className="hover:scale-110 transition-transform">
                        <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwca9d87e8/images/footer/footer-writetous.svg" alt="Email" className="w-[20px] h-[16px] object-contain" />
                      </a>
                      <a href="#" className="hover:scale-110 transition-transform">
                        <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw69956d76/images/footer/footer-chatwithus.svg" alt="Chat" className="w-[18px] h-[18px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile App Download (Mobile Only) */}
              <div className="flex md:hidden justify-center gap-4 mb-8">
                <a href="https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp" target="_blank" rel="noopener noreferrer">
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf3971307/images/footer/footer-playstore.svg" alt="Play Store" />
                </a>
                <a href="https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207" target="_blank" rel="noopener noreferrer">
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9d356b9/images/footer/footer-ios.svg" alt="App Store" />
                </a>
              </div>

              {/* Socials Divider */}
              <div className="border-t border-[#4A2425] pt-6 mb-5">
                <div className="flex items-center gap-6">
                  <span className="text-white font-serif text-[17px]">Social</span>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/tanishqjewellery/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4A2425] flex items-center justify-center hover:bg-[#60292B] transition-colors">
                      <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwdd3964ee/images/footer/footer-instagram.svg" alt="Instagram" className="w-4 h-4" />
                    </a>
                    <a href="https://twitter.com/TanishqJewelry" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4A2425] flex items-center justify-center hover:bg-[#60292B] transition-colors">
                      <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw55bd73af/images/footer/footer-twitter.svg" alt="Twitter" className="w-4 h-4" />
                    </a>
                    <a href="https://www.facebook.com/tanishq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4A2425] flex items-center justify-center hover:bg-[#60292B] transition-colors">
                      <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd3c8497b/images/footer/footer-fb.svg" alt="Facebook" className="w-[10px] h-4" />
                    </a>
                    <a href="https://www.youtube.com/tanishq" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#4A2425] flex items-center justify-center hover:bg-[#60292B] transition-colors">
                      <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcf955502/images/footer/footer-youtube.svg" alt="Youtube" className="w-[18px] h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Payments Divider */}
              <div className="border-t border-[#4A2425] pt-6 mb-6">
                <div className="flex flex-wrap gap-4 items-center">
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7b8761e0/images/footer/footer-visa.svg" alt="Visa" className="h-4" />
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw567d438d/images/footer/footer-mastercard.svg" alt="Mastercard" className="h-[22px]" />
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc6c7f35b/images/footer/footer-maestro.svg" alt="Maestro" className="h-[22px]" />
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw5e3e7fa9/images/footer/footer-paypal.svg" alt="Paypal" className="h-[14px]" />
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwac930b5f/images/footer/footer-dinnerclub.svg" alt="Diners Club" className="h-6" />
                  <Image width={500} height={500} loading="lazy" src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw54f98ea5/images/footer/footer-americanexpress.svg" alt="Amex" className="h-[22px]" />
                </div>
              </div>

              {/* Copyright Divider */}
              <div className="border-t border-[#4A2425] pt-6 flex flex-col xl:flex-row justify-between text-[11px] text-gray-300 gap-4">
                <div>©️ 2026 Titan Company Limited. All Rights Reserved.</div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <a href="#" className="hover:text-white transition-colors">Cyber Security Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}