"use client"; // ใช้ใน Next.js 13+ เพื่อให้ทำงานฝั่ง Client
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import SectionAbout from "@/src/components/SectionAbout";
import SectionHomeBanner from "@/src/components/SectionHomeBanner";
import SectionSkills from "@/src/components/SectionSkills";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="home-page" data-aos="fade-in" data-aos-duration="1000">
        <SectionHomeBanner />
        <SectionAbout />
        <SectionSkills />
      </div>
    </>
  );
}
