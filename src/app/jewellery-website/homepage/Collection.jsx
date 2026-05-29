// Collection.jsx

import React from "react";

const Collection = () => {
    return (
        <section className="w-full bg-[#f6f3f3] py-12 px-6 md:px-12 lg:px-20 overflow-hidden">

            {/* HEADING */}
            <div className="text-center mb-10">
                <h1
                    className="text-[38px] md:text-[54px] font-medium text-[#3b0d12]"
                    style={{
                        fontFamily: "serif",
                        lineHeight: "1.1",
                    }}
                >
                    OUR Collections
                </h1>

                <p
                    className="text-[#6d6666] text-[18px] md:text-[26px] mt-2"
                    style={{
                        fontFamily: "serif",
                    }}
                >
                    Explore our newly launched collection
                </p>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:flex gap-5 max-w-[1440px] mx-auto items-stretch">

                {/* LEFT BIG IMAGE */}
                <div className="w-1/2">
                    <div className="relative overflow-hidden rounded-[24px] group h-[670px] bg-black">

                        <img
                            src="https://img.magnific.com/free-photo/women-wearing-thai-clothes-hands-touching-their-faces_1150-15627.jpg?t=st=1779514486~exp=1779518086~hmac=841640258141d87bb34beef1896e7b74ea0d3a17fdc0abd3b95bbc382dc1b8b7&w=1480"
                            alt="Traditional Jewellery Model"
                            className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                        {/* Text */}
                        <div className="absolute bottom-10 left-10 z-10">
                            <h2
                                className="text-white text-[58px] leading-none drop-shadow-lg"
                                style={{
                                    fontFamily: "serif",
                                }}
                            >
                                Defines Beauty
                            </h2>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-1/2 flex flex-col gap-5">

                    {/* TOP RIGHT */}
                    <div className="relative overflow-hidden rounded-[24px] group h-[322px] bg-[#e7d0b8]">

                        <img
                            src="https://img.magnific.com/free-photo/elegant-beauty-gold-traditional-clothing-generated-by-ai_188544-20651.jpg"
                            alt="Traditional Earrings"
                            className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Text */}
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 text-right z-10">
                            <h2
                                className="text-white text-[42px] leading-[0.95] drop-shadow-lg"
                                style={{
                                    fontFamily: "serif",
                                }}
                            >
                                Traditional
                            </h2>

                            <h3
                                className="text-white text-[42px] leading-[0.95]"
                                style={{
                                    fontFamily: "serif",
                                }}
                            >
                                Elegance
                            </h3>
                        </div>
                    </div>

                    {/* BOTTOM RIGHT */}
                    <div className="relative overflow-hidden rounded-[24px] group h-[322px] bg-[#5f8b90]">

                        <img
                            src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=1400&auto=format&fit=crop"
                            alt="Gold Necklace"
                            className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>

                        {/* Text */}
                        <div className="absolute left-10 bottom-10 z-10">
                            <h2
                                className="text-white text-[42px] leading-none drop-shadow-lg"
                                style={{
                                    fontFamily: "serif",
                                }}
                            >
                                Royal Gold
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE LAYOUT */}
            <div className="flex md:hidden flex-col gap-4">

                {/* MOBILE CARD 1 */}
                <div className="relative overflow-hidden rounded-[20px] h-[420px] bg-black group">
                    <img
                        src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1600&auto=format&fit=crop"
                        alt="Traditional Jewellery Model"
                        className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    <div className="absolute bottom-6 left-6 z-10">
                        <h2
                            className="text-white text-[42px]"
                            style={{
                                fontFamily: "serif",
                            }}
                        >
                            Defines Beauty
                        </h2>
                    </div>
                </div>

                {/* MOBILE CARD 2 */}
                <div className="relative overflow-hidden rounded-[20px] h-[240px] bg-[#e7d0b8] group">

                    <img
                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
                        alt="Traditional Earrings"
                        className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right z-10">
                        <h2
                            className="text-white text-[30px] leading-none"
                            style={{
                                fontFamily: "serif",
                            }}
                        >
                            Traditional
                        </h2>

                        <h3
                            className="text-white text-[30px] leading-none"
                            style={{
                                fontFamily: "serif",
                            }}
                        >
                            Elegance
                        </h3>
                    </div>
                </div>

                {/* MOBILE CARD 3 */}
                <div className="relative overflow-hidden rounded-[20px] h-[240px] bg-[#5f8b90] group">

                    <img
                        src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=1400&auto=format&fit=crop"
                        alt="Royal Gold Necklace"
                        className="w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>

                    <div className="absolute left-5 bottom-5 z-10">
                        <h2
                            className="text-white text-[30px]"
                            style={{
                                fontFamily: "serif",
                            }}
                        >
                            Royal Gold
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;