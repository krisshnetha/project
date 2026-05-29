"use client";

import React, { useState } from "react";

const categories = [
  {
    id: 1,
    title: "EARRINGS",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb020c8e8/homepage/shopByCategory/earrings-3-4-26.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "FINGER RINGS",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0fc5b343/homepage/shopByCategory/ring-3-4-26.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "PENDANTS",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd542794c/homepage/shopByCategory/pendants-3-4-26.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "MANGALSUTRA",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw690cf387/homepage/shopByCategory/mangalsutra-3-4-26.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "BRACELETS",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1bb86764/homepage/shopByCategory/bracelets-3-4-26.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "BANGLES",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4f80ca28/homepage/shopByCategory/bangles-3-4-26.jpg",
    link: "#"
  },
  {
    id: 7,
    title: "CHAINS",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw39590bd2/homepage/shopByCategory/chains-3-4-26.jpg",
    link: "#"
  }
];

const TiltCard = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize tilt coordinates
    const tiltX = (y / (box.height / 2)) * -6;
    const tiltY = (x / (box.width / 2)) * 6;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </div>
  );
};

export default function Categories() {
  return (
    <section className="w-full bg-[#fcfaf7] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2 
            className="text-[36px] md:text-[46px] font-medium text-[#4a1f12] leading-tight"
            style={{ fontFamily: "serif" }}
          >
            Find Your Perfect Match
          </h2>
          <p 
            className="text-[#8c786c] text-[16px] md:text-[18px] tracking-[0.1em] uppercase mt-2 font-light"
            style={{ fontFamily: "serif" }}
          >
            Shop by Categories
          </p>
          <div className="w-16 h-[1.5px] bg-[#9b6b43] mx-auto mt-4"></div>
        </div>

        {/* INCLINED TABLE / SKEWED GRID CONTAINER */}
        <div className="relative py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            {categories.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center group">
                <TiltCard className="w-full aspect-square overflow-hidden rounded-[20px] shadow-md border border-[#e8ddd2]/60 bg-[#e7eae9] relative cursor-pointer">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f12]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </TiltCard>
                
                <h3 
                  className="text-[13px] md:text-[15px] font-semibold tracking-[0.2em] text-[#4a2d23] hover:text-[#9b6b43] transition duration-300 mt-4 uppercase text-center"
                  style={{ fontFamily: "serif" }}
                >
                  {cat.title}
                </h3>
              </div>
            ))}

            {/* VIEW ALL CARD */}
            <div className="flex flex-col items-center group">
              <TiltCard className="w-full aspect-square overflow-hidden rounded-[20px] border border-[#e8ddd2] bg-white flex flex-col justify-between p-6 md:p-8 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <span 
                    className="text-[44px] md:text-[54px] font-bold text-[#8a1c22] leading-none"
                    style={{ fontFamily: "serif" }}
                  >
                    10+
                  </span>
                  <span 
                    className="text-xs md:text-sm text-[#8c786c] tracking-wider mt-2 font-medium"
                    style={{ fontFamily: "serif" }}
                  >
                    Categories to choose from
                  </span>
                </div>
              </TiltCard>
              
              <h3 
                className="text-[13px] md:text-[15px] font-semibold tracking-[0.2em] text-[#8a1c22] transition duration-300 mt-4 uppercase text-center"
                style={{ fontFamily: "serif" }}
              >
                VIEW ALL
              </h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
