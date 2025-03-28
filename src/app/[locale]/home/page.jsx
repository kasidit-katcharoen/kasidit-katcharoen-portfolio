"use client";
import "@/src/styles/home.scss";
import { useEffect, useState } from "react";
import AOS from "aos";
import SectionAbout from "@/src/components/SectionAbout";
import SectionHomeBanner from "@/src/components/SectionHomeBanner";
import SectionSkills from "@/src/components/SectionSkills";
import SectionContact from "@/src/components/SectionContact";
import { Particles } from "@/src/components/magicui/particles";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#83ccd7");
  }, [resolvedTheme]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="home-page">
        <Particles
          className="absolute inset-0 z-0"
          size={1.5}
          quantity={200}
          ease={80}
          color={color}
          refresh
        />
        <SectionHomeBanner />
        <SectionAbout />
        <SectionSkills />
        <SectionContact />
      </div>
    </>
  );
}
