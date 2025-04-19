"use client";
import "@/src/styles/home.scss";
import { useEffect, useState } from "react";
import AOS from "aos";
import SectionAbout from "@/src/components/SectionAbout";
import SectionHomeBanner from "@/src/components/SectionHomeBanner";
import SectionSkills from "@/src/components/SectionSkills";
import SectionContact from "@/src/components/SectionContact";
import SectionProjects from "@/src/components/SectionProjects";
import ParallaxSection from "@/src/hooks/ParallaxSection";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="home-page">
        <SectionHomeBanner />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
      </div>
    </>
  );
}
