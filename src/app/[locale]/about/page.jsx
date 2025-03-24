"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import '@/src/styles/about.scss';

export default function About() {
  return (
    <>
      <div id="about-page">
        <Marquee speed={50} gradient={true} pauseOnHover={true}>
          🚀 Welcome to Next.js Marquee! 🌟
        </Marquee>
      </div>
    </>
  );
}
