"use client";

import React from "react";

export default function Gift() {
    return (
        <section className="w-full bg-[#fdfaf7] py-20 px-6 md:px-12 lg:px-20 overflow-hidden font-serif">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 items-stretch justify-center">
                {/* ── GIFT CARD ── */}
                <div
                    style={{
                        flex: "1 1 45%",
                        minHeight: "450px",
                        borderRadius: "20px",
                        backgroundColor: "#f5e8e8",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        padding: "40px 44px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        /* inclined / skewed table effect with translateZ to prevent clipping */
                        transform: "perspective(900px) translateZ(20px) rotateY(-3deg) rotateX(1.5deg)",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                            "perspective(900px) translateZ(40px) rotateY(0deg) rotateX(0deg) translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.14)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                            "perspective(900px) translateZ(20px) rotateY(-3deg) rotateX(1.5deg)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                    }}
                >
                    {/* Ribbon — horizontal */}
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            height: "52px",
                            background: "linear-gradient(90deg, #7d1a1a, #a52828, #7d1a1a)",
                            zIndex: 1,
                            boxShadow: "0 4px 16px rgba(125,26,26,0.35)",
                        }}
                    />
                    {/* Ribbon — vertical */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "52px",
                            background: "linear-gradient(180deg, #7d1a1a, #a52828, #7d1a1a)",
                            zIndex: 1,
                            boxShadow: "4px 0 16px rgba(125,26,26,0.35)",
                        }}
                    />
                    {/* Bow knot */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "68px",
                            height: "68px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle at 40% 40%, #c0392b, #7d1a1a)",
                            zIndex: 3,
                            boxShadow: "0 4px 16px rgba(125,26,26,0.5)",
                        }}
                    >
                        {/* Left loop */}
                        <div
                            style={{
                                position: "absolute",
                                top: "10px",
                                left: "-36px",
                                width: "44px",
                                height: "28px",
                                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                background: "#a52828",
                                transform: "rotate(-30deg)",
                            }}
                        />
                        {/* Right loop */}
                        <div
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "-36px",
                                width: "44px",
                                height: "28px",
                                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                background: "#a52828",
                                transform: "rotate(30deg)",
                            }}
                        />
                    </div>

                    {/* Text content — sits above ribbons */}
                    <div
                        style={{
                            position: "relative",
                            zIndex: 5,
                            maxWidth: "320px",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "clamp(28px, 3.5vw, 40px)",
                                fontWeight: "600",
                                color: "#6b1c1c",
                                margin: "0 0 12px 0",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            #GiftOfChoice
                        </h3>
                        <p
                            style={{
                                fontSize: "15px",
                                color: "#5a3a3a",
                                margin: "0 0 24px 0",
                                lineHeight: "1.6",
                            }}
                        >
                            Breathtaking gifts for your loved one&apos;s
                            <br />
                            <span
                                style={{
                                    fontWeight: "700",
                                    color: "#a52828",
                                    fontSize: "13px",
                                    letterSpacing: "0.06em",
                                }}
                            >
                                STARTING AT ₹10,000
                            </span>
                        </p>
                        <a
                            href="https://www.tanishq.co.in/gifting?lang=en_IN"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "12px 28px",
                                borderRadius: "50px",
                                border: "1.5px solid #6b1c1c",
                                backgroundColor: "rgba(253,250,247,0.85)",
                                color: "#3d0e0e",
                                fontSize: "15px",
                                fontWeight: "600",
                                textDecoration: "none",
                                backdropFilter: "blur(6px)",
                                transition: "background 0.3s, color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#6b1c1c";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "rgba(253,250,247,0.85)";
                                e.currentTarget.style.color = "#3d0e0e";
                            }}
                        >
                            Explore Now <span style={{ fontSize: "12px" }}>›</span>
                        </a>
                    </div>
                </div>

                {/* ── EXCHANGE CARD ── */}
                <div
                    style={{
                        flex: "1 1 45%",
                        minHeight: "450px",
                        borderRadius: "20px",
                        backgroundColor: "#fdf5e6",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        padding: "40px 44px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        /* inclined / skewed table effect with translateZ to prevent clipping */
                        transform: "perspective(900px) translateZ(20px) rotateY(3deg) rotateX(1.5deg)",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                            "perspective(900px) translateZ(40px) rotateY(0deg) rotateX(0deg) translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.14)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                            "perspective(900px) translateZ(20px) rotateY(3deg) rotateX(1.5deg)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                    }}
                >
                    {/* Decorative arched background shape */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-60px",
                            right: "-60px",
                            width: "260px",
                            height: "260px",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(196,158,100,0.15) 0%, transparent 70%)",
                            zIndex: 0,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-80px",
                            left: "-40px",
                            width: "220px",
                            height: "220px",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(196,158,100,0.1) 0%, transparent 70%)",
                            zIndex: 0,
                        }}
                    />

                    {/* Text content */}
                    <div style={{ position: "relative", zIndex: 2, maxWidth: "340px" }}>
                        {/* Exchange icon — arch/temple motif */}
                        <div
                            style={{
                                width: "72px",
                                height: "72px",
                                borderRadius: "50% 50% 0 0 / 60% 60% 0 0",
                                border: "2.5px solid #c49e64",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "20px",
                                background: "rgba(196,158,100,0.08)",
                                position: "relative",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "11px",
                                    fontWeight: "700",
                                    color: "#c49e64",
                                    letterSpacing: "0.06em",
                                    textAlign: "center",
                                    lineHeight: "1.2",
                                }}
                            >
                                ASM<br />
                                <span style={{ fontSize: "9px", fontWeight: "400" }}>
                                    JEWELLERY
                                </span>
                            </span>
                            {/* Small arrows on sides */}
                            <span
                                style={{
                                    position: "absolute",
                                    left: "-18px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    fontSize: "16px",
                                    color: "#c49e64",
                                }}
                            >
                                ‹
                            </span>
                            <span
                                style={{
                                    position: "absolute",
                                    right: "-18px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    fontSize: "16px",
                                    color: "#c49e64",
                                }}
                            >
                                ›
                            </span>
                        </div>

                        <h3
                            style={{
                                fontSize: "clamp(18px, 2.2vw, 24px)",
                                fontWeight: "700",
                                color: "#2c1a0e",
                                margin: "0 0 12px 0",
                                lineHeight: "1.4",
                            }}
                        >
                            Exchange your old gold at ASM Jewellery, and help reduce
                            India&apos;s dependency on imports.
                        </h3>
                        <p
                            style={{
                                fontSize: "14px",
                                color: "#6b5a47",
                                margin: "0 0 28px 0",
                                lineHeight: "1.7",
                            }}
                        >
                            Flat 0% deduction* on exchange of old gold as low as 9 karat,
                            bought from any jeweller.
                        </p>
                        <a
                            href="#"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "12px 28px",
                                borderRadius: "50px",
                                border: "1.5px solid #c49e64",
                                backgroundColor: "rgba(253,250,247,0.85)",
                                color: "#5a3a0e",
                                fontSize: "15px",
                                fontWeight: "600",
                                textDecoration: "none",
                                backdropFilter: "blur(6px)",
                                transition: "background 0.3s, color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#c49e64";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                    "rgba(253,250,247,0.85)";
                                e.currentTarget.style.color = "#5a3a0e";
                            }}
                        >
                            Know more <span style={{ fontSize: "12px" }}>›</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
