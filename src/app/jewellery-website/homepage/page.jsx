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
            <Header />
            <Hero />

            <Collection />
            <Categories />
            <Pieces />
            <Occasion />
            <Video />
            <Gift />
            <Footer />

        </>
    );
}
