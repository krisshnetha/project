"use client";

import React, { useState } from "react";

const pillars = [
  {
    id: 1,
    title: "Wedding",
    desktopImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg",
    mobileImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd397003f/homepage/tanishq-pillars/tw-nt-wedding-mobile.jpg",

    aspect: "aspect-[4/3] md:aspect-[4/5]"
  },
  {
    id: 2,
    title: "Gold",
    desktopImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg",
    mobileImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf78a044e/homepage/tanishq-pillars/tw-nt-gold-mobile.jpg",

    aspect: "aspect-[4/3] md:aspect-[5/4]"
  },
  {
    id: 3,
    title: "Diamond",
    desktopImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1f6a4391/homepage/tanishq-pillars/fod-diamond-desktop.jpg",
    mobileImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9d0074cc/homepage/tanishq-pillars/fod-diamond-mobile.jpg",

    aspect: "aspect-[4/3] md:aspect-[5/4]"
  },
  {
    id: 4,
    title: "Dailywear",
    desktopImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f91b4a3/homepage/tanishq-pillars/ai-dailywear-desktop.jpg",
    mobileImg: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw940c9fca/homepage/tanishq-pillars/ai-dailywear-mobile.jpg",

    aspect: "aspect-[4/3] md:aspect-[4/5]"
  }
];

const TiltCard = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Smooth 3D tilt coordinates
    const tiltX = (y / (box.height / 2)) * -4;
    const tiltY = (x / (box.width / 2)) * 4;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.015, 1.015, 1.015)`,
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </div>
  );
};

export default function Occasion() {
  return (
    <section className="w-full bg-[#fdfaf7] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2
            className="text-[36px] md:text-[46px] font-medium text-[#4a1f12] leading-tight"
            style={{ fontFamily: "serif" }}
          >
            ASM World
          </h2>
          <p
            className="text-[#8c786c] text-[16px] md:text-[18px] tracking-[0.05em] mt-2 font-light"
            style={{ fontFamily: "serif" }}
          >
            A companion for every occasion
          </p>
          <div className="w-16 h-[1.5px] bg-[#9b6b43] mx-auto mt-4"></div>
        </div>

        {/* STAGGERED MASONRY GRID (DESKTOP) & STACK (MOBILE) */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-start">

          {/* COLUMN 1: Wedding & Gold */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Wedding Card (Tall) */}
            <a href={pillars[0].link} className="group block cursor-pointer">
              <TiltCard className="w-full overflow-hidden rounded-[24px] shadow-lg border border-[#e8ddd2]/50 relative">
                <picture>
                  <source srcSet={pillars[0].desktopImg} media="(min-width: 768px)" />
                  <img
                    src={pillars[0].mobileImg}
                    alt={pillars[0].title}
                    className={`w-full ${pillars[0].aspect} object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
                    loading="lazy"
                  />
                </picture>
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-center p-6 md:p-8">
                  <h3
                    className="text-white text-[24px] md:text-[32px] lg:text-[36px] font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                    style={{ fontFamily: "serif" }}
                  >
                    {pillars[0].title}
                  </h3>
                </div>
              </TiltCard>
            </a>

            {/* Gold Card (Short) */}
            <a href={pillars[1].link} className="group block cursor-pointer">
              <TiltCard className="w-full overflow-hidden rounded-[24px] shadow-lg border border-[#e8ddd2]/50 relative">
                <picture>
                  <source srcSet={pillars[1].desktopImg} media="(min-width: 768px)" />
                  <img
                    src={pillars[1].mobileImg}
                    alt={pillars[1].title}
                    className={`w-full ${pillars[1].aspect} object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
                    loading="lazy"
                  />
                </picture>
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-center p-6 md:p-8">
                  <h3
                    className="text-white text-[24px] md:text-[32px] lg:text-[36px] font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                    style={{ fontFamily: "serif" }}
                  >
                    {pillars[1].title}
                  </h3>
                </div>
              </TiltCard>
            </a>
          </div>

          {/* COLUMN 2: Diamond & Dailywear */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {/* Diamond Card (Short) */}
            <a href={pillars[2].link} className="group block cursor-pointer">
              <TiltCard className="w-full overflow-hidden rounded-[24px] shadow-lg border border-[#e8ddd2]/50 relative">
                <picture>
                  <source srcSet={pillars[2].desktopImg} media="(min-width: 768px)" />
                  <img
                    src={pillars[2].mobileImg}
                    alt={pillars[2].title}
                    className={`w-full ${pillars[2].aspect} object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
                    loading="lazy"
                  />
                </picture>
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-center p-6 md:p-8">
                  <h3
                    className="text-white text-[24px] md:text-[32px] lg:text-[36px] font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                    style={{ fontFamily: "serif" }}
                  >
                    {pillars[2].title}
                  </h3>
                </div>
              </TiltCard>
            </a>

            {/* Dailywear Card (Tall) */}
            <a href={pillars[3].link} className="group block cursor-pointer">
              <TiltCard className="w-full overflow-hidden rounded-[24px] shadow-lg border border-[#e8ddd2]/50 relative">
                <picture>
                  <source srcSet={pillars[3].desktopImg} media="(min-width: 768px)" />
                  <img
                    src={pillars[3].mobileImg}
                    alt={pillars[3].title}
                    className={`w-full ${pillars[3].aspect} object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
                    loading="lazy"
                  />
                </picture>
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end justify-center p-6 md:p-8">
                  <h3
                    className="text-white text-[24px] md:text-[32px] lg:text-[36px] font-medium tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                    style={{ fontFamily: "serif" }}
                  >
                    {pillars[3].title}
                  </h3>
                </div>
              </TiltCard>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
