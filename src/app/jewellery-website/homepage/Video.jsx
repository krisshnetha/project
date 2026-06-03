"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize, Share2, ChevronLeft, ChevronRight } from "lucide-react";

const videoItems = [
  {
    id: 1,
    title: "Business Hours to Blissful Evenings",
    caption: "Make every moment shine bright with our natural diamond collection.",
    poster: "https://cdn7.fireworktv.com/medias/2024/12/20/1734678389-rbzsypiw/transcoded/480_800/Frombusinesshourstoblissfulevenings,makeeverymomentshinebrightwithourdiamondcollection.%C2%A0ExploretheworldofnaturaldiamondsatTanishq%E2%80%99sFestivalofDiamonds,withover-.jpg.62.webp",
    videoUrl: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/transcoded/720/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1.mp4",
    products: [
      { name: "Vintage Charm Ring", price: "₹48,500", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678920-pefrtwxn/720_720/50D4B2FXBAA09_1.jpg" },
      { name: "Floral Mangalsutra", price: "₹82,300", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678823-tlerbkvf/720_720/502999YCNAA32_1.jpg" }
    ]
  },
  {
    id: 2,
    title: "Unleash Main Character Energy",
    caption: "Diamonds are all you need to style statement looks for festive nights.",
    poster: "https://cdn1.fireworktv.com/medias/2024/12/20/1734679771-iwgzlfdj/transcoded/480_800/DiamondsareallyouneedtounleashthatmaincharacterenergyWhetheryoustylethemasstatementpiecesorlayerthemtomakeafashionstatement,Tanishq%E2%80%99swiderangeofjewelleryhe.jpg.62.webp",
    videoUrl: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/transcoded/720/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1.mp4",
    products: [
      { name: "Radiant Crescent Set", price: "₹1,45,000", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678717-sbpcqthi/720_720/55O4LE2ACABB10_1.jpg" },
      { name: "Exquisite Vines Set", price: "₹2,10,000", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678618-fsdvhecn/720_720/5021172QGABA02_1.jpg" }
    ]
  },
  {
    id: 3,
    title: "Mark Your Moment",
    caption: "#MarkYourMoment with diamonds crafted for special occasions and style them with your festive attire.",
    poster: "https://cdn3.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/transcoded/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1-720-0.jpg.10.webp",
    videoUrl: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/transcoded/720/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1.mp4",
    products: [
      { name: "Wave Diamond Bangle", price: "₹1,12,000", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678529-zumihkcx/720_720/50D4I3VCE1A09_1.jpg" },
      { name: "Array Diamond Ring", price: "₹56,000", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734677640-icnpztyj/720_720/50E3I1FDQAA02_1.jpg" }
    ]
  },
  {
    id: 4,
    title: "Dazzle From AM to PM",
    caption: "Find the perfect diamond designs that make you stand out from morning hours to night events.",
    poster: "https://cdn7.fireworktv.com/medias/2024/12/20/1734677123-wqpjifmg/transcoded/FindtheperfectdiamondthatmakesyoudazzlefromAMtoPMExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestivalofDiamonds,withover10,000diamonddesigns%C2%A0Fe1_1-720-0.jpg.10.webp",
    videoUrl: "https://cdn4.fireworktv.com/medias/2024/12/20/1734677123-wqpjifmg/transcoded/720/FindtheperfectdiamondthatmakesyoudazzlefromAMtoPMExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestivalofDiamonds,withover10,000diamonddesigns%C2%A0Fe1_1.mp4",
    products: [
      { name: "Glamour Halo Bangle", price: "₹1,85,000", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678102-ygmuoxwc/720_720/50O4B1VOQ1A02_2.jpg" },
      { name: "Elegant Allure Pendant", price: "₹63,200", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734677801-wxjgilfe/720_720/50D4I1PBUAAA09_1.jpg" }
    ]
  },
  {
    id: 5,
    title: "Glamour is the Golden Hour",
    caption: "Shine with modern silhouettes crafted to complement evening diamond layouts.",
    poster: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678102-ygmuoxwc/720_720/50O4B1VOQ1A02_2.jpg",
    videoUrl: "https://cdn4.fireworktv.com/medias/2024/12/20/1734677123-wqpjifmg/transcoded/720/FindtheperfectdiamondthatmakesyoudazzlefromAMtoPMExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestivalofDiamonds,withover10,000diamonddesigns%C2%A0Fe1_1.mp4",
    products: [
      { name: "Vintage Charm Ring", price: "₹48,500", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678920-pefrtwxn/720_720/50D4B2FXBAA09_1.jpg" },
      { name: "Radiant Crescent Set", price: "₹1,45,000", image: "https://cdn4.fireworktv.com/medias/2024/12/20/1734678717-sbpcqthi/720_720/55O4LE2ACABB10_1.jpg" }
    ]
  }
];

export default function Video() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Play / Pause controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Mute / Unmute controls
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Watch index change to reset play state
  useEffect(() => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videoItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videoItems.length) % videoItems.length);
  };

  return (
    <section className="w-full bg-[#fdfaf7] py-16 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2 
            className="text-[36px] md:text-[46px] font-medium text-[#4a1f12] leading-tight"
            style={{ fontFamily: "serif" }}
          >
            Styling 101 With Diamonds
          </h2>
          <p 
            className="text-[#8c786c] text-[16px] md:text-[18px] tracking-[0.05em] mt-2 font-light"
            style={{ fontFamily: "serif" }}
          >
            Trendsetting diamond jewellery suited for every occasion
          </p>
          <div className="w-16 h-[1.5px] bg-[#9b6b43] mx-auto mt-4"></div>
        </div>

        {/* 3D CAROUSEL CONTAINER */}
        <div className="relative flex justify-center items-center h-[620px] md:h-[780px] w-full" style={{ perspective: "1500px" }}>
          
          {videoItems.map((item, idx) => {
            const offset = idx - activeIndex;
            const isActive = idx === activeIndex;

            // Compute 3D translations & rotations for the Cover Flow look
            let transformStyle = "";
            let zIndex = 10;
            let opacity = 1;

            if (isActive) {
              transformStyle = "translate3d(0, 0, 120px) rotateY(0deg)";
              zIndex = 30;
            } else if (offset === -1 || (activeIndex === 0 && idx === videoItems.length - 1)) {
              // Left card
              transformStyle = "translate3d(-50%, 0, 0) rotateY(45deg) scale(0.85)";
              zIndex = 20;
              opacity = 0.85;
            } else if (offset === -2 || (activeIndex === 1 && idx === videoItems.length - 1) || (activeIndex === 0 && idx === videoItems.length - 2)) {
              // Far left card
              transformStyle = "translate3d(-95%, 0, -100px) rotateY(55deg) scale(0.75)";
              zIndex = 10;
              opacity = 0.5;
            } else if (offset === 1 || (activeIndex === videoItems.length - 1 && idx === 0)) {
              // Right card
              transformStyle = "translate3d(50%, 0, 0) rotateY(-45deg) scale(0.85)";
              zIndex = 20;
              opacity = 0.85;
            } else if (offset === 2 || (activeIndex === videoItems.length - 2 && idx === 0) || (activeIndex === videoItems.length - 1 && idx === 1)) {
              // Far right card
              transformStyle = "translate3d(95%, 0, -100px) rotateY(-55deg) scale(0.75)";
              zIndex = 10;
              opacity = 0.5;
            } else {
              // Hidden cards
              transformStyle = "translate3d(0, 0, -300px) scale(0.5)";
              zIndex = 0;
              opacity = 0;
            }

            return (
              <div
                key={item.id}
                onClick={() => !isActive && setActiveIndex(idx)}
                className={`absolute w-[340px] md:w-[420px] h-[560px] md:h-[700px] rounded-[24px] overflow-hidden shadow-2xl transition-all duration-700 ease-out cursor-pointer ${
                  isActive ? "ring-2 ring-[#9b6b43]/30" : ""
                }`}
                style={{
                  transform: transformStyle,
                  transformStyle: "preserve-3d",
                  zIndex: zIndex,
                  opacity: opacity,
                  backfaceVisibility: "hidden"
                }}
              >
                {/* ACTIVE PLAYING STATE */}
                {isActive ? (
                  <div className="relative w-full h-full bg-black">
                    <video
                      ref={videoRef}
                      src={item.videoUrl}
                      className="w-full h-full object-cover"
                      poster={item.poster}
                      loop
                      muted={isMuted}
                      playsInline
                    />
                    
                    {/* Header caption text overlay */}
                    <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-4 text-white text-[12px] md:text-[13px] font-light leading-snug">
                      {item.caption}
                    </div>

                    {/* Left/Right click triggers */}
                    <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2 z-20">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
                        className="p-1.5 rounded-full bg-black/40 text-white/80 hover:bg-black/60 transition pointer-events-auto"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleNext(); }} 
                        className="p-1.5 rounded-full bg-black/40 text-white/80 hover:bg-black/60 transition pointer-events-auto"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    {/* Media Actions Overlay (Mute, Play, Share) */}
                    <div className="absolute top-4 right-4 flex flex-col gap-3 z-20">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleMute(); }} 
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition"
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }} 
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); }} 
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>

                    {/* Video Progress Bar */}
                    <div className="absolute bottom-[84px] inset-x-0 px-4 z-20">
                      <div className="w-full h-[3px] bg-white/30 rounded-full overflow-hidden">
                        <div className="h-full bg-white animate-pulse" style={{ width: "65%" }}></div>
                      </div>
                    </div>

                    {/* INLINE ASSOCIATED PRODUCTS LIST */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6 flex flex-col gap-2 z-20">
                      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                        {item.products.map((prod, pIdx) => (
                          <div 
                            key={pIdx} 
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl p-1.5 pr-3 min-w-[140px] flex-shrink-0 border border-white/10"
                          >
                            <Image width={500} height={500} src={prod.image} alt={prod.name} className="w-9 h-9 object-cover rounded-lg" />
                            <div className="flex flex-col text-[10px] text-white">
                              <span className="font-semibold truncate max-w-[80px]">{prod.name}</span>
                              <span className="opacity-80">{prod.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ) : (
                  // STATIC POSTER CARD (INCLINED / SIDE VIEW)
                  <div className="relative w-full h-full bg-black group">
                    <Image width={500} height={500}
                      src={item.poster}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1000ms]"
                    />
                    {/* Shadow overlay to enforce side-depth */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
