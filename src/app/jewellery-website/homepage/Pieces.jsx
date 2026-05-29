"use client";

import React, { useState } from "react";

const trendingPieces = [
  {
    id: 1,
    title: "Auspicious Occasion",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg",
    link: "https://www.tanishq.co.in/shop/auspicious?lang=en_IN"
  },
  {
    id: 2,
    title: "Gifting Jewellery",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd7004c0d/homepage/trendingNow/gifting.jpg",
    link: "https://www.tanishq.co.in/gifting?lang=en_IN"
  },
  {
    id: 3,
    title: "Origami Edit",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw36225d8a/homepage/trendingNow/origami-edit.jpg",
    link: "https://www.tanishq.co.in/shop/diamond?lang=en_IN"
  }
];

const TiltCard = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates for subtle tilt rotation
    const tiltX = (y / (box.height / 2)) * -5;
    const tiltY = (x / (box.width / 2)) * 5;
    
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

export default function Pieces() {
  return (
    <section className="w-full bg-[#fdfaf7] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2 
            className="text-[36px] md:text-[46px] font-medium text-[#4a1f12] leading-tight"
            style={{ fontFamily: "serif" }}
          >
            Trending Now
          </h2>
          <p 
            className="text-[#8c786c] text-[16px] md:text-[18px] tracking-[0.05em] mt-2 font-light"
            style={{ fontFamily: "serif" }}
          >
            Jewellery pieces everyone’s eyeing right now
          </p>
          <div className="w-16 h-[1.5px] bg-[#9b6b43] mx-auto mt-4"></div>
        </div>

        {/* 3-IMAGE LAYOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {trendingPieces.map((piece) => (
            <a 
              key={piece.id} 
              href={piece.link}
              className="flex flex-col items-center group cursor-pointer"
            >
              <TiltCard className="w-full aspect-[4/5] overflow-hidden rounded-[24px] shadow-lg border border-[#e8ddd2]/50 bg-[#e7eae9] relative">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Elegant glow vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a1f12]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </TiltCard>
              
              <p 
                className="text-[#56544E] text-[16px] md:text-[18px] font-medium transition-colors duration-300 mt-5 group-hover:text-[#9b6b43]"
                style={{ fontFamily: "serif" }}
              >
                {piece.title}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
