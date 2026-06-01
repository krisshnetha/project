"use client";

import React from "react";
import Header from "../common-components/Header";

import Collection from "./Collection";
import Pieces from "./Pieces";
import Categories from "./Categories";
import Occasion from "./Occasion";
import Video from "./Video";
import Gift from "./Gift";
import Footer from "../common-components/Footer";
import Hero from "./Hero";

export default function JewelleryHomepage() {
    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#4a1f12] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold"
            >
                Skip to main content
            </a>
            <Header />
            <main id="main-content" role="main">
                <Hero />
                <Collection />
                <Categories />
                <Pieces />
                <Occasion />
                <Video />
                <Gift />
            </main>
            <Footer />
        </>
    );
}
