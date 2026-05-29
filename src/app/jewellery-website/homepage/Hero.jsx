"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => setIsPlaying(false));
        }
    }, []);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play().catch(() => { });
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <section className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
            <video
                ref={videoRef}
                src="https://cdn.dribbble.com/userupload/18961425/file/original-bdf545ec87b26960636a053827d05568.mp4"
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
            />

            {/* Subtle gradient overlay at bottom for controls */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Media controls */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
                <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                    title={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                    title={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
            </div>
        </section>
    );
}
