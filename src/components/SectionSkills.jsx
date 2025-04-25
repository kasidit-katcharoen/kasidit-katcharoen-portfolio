import React, { useEffect, useState } from "react";
import "@/src/styles/SectionSkills.scss";
import { useLocale } from "next-intl";
import Dropdown from "@/src/components/ui/Dropdown";
import messages from "@/src/messages/messages.jsx";
import { Particles } from "./magicui/particles";
import { useTheme } from "next-themes";
import { getTheme } from "../hooks/useThemeData";
import { skills } from "@/src/hooks/useCommon";
import ParallaxSection from "../hooks/ParallaxSection";
import { Skeleton } from "@mui/material";

export default function SectionSkills() {
  const locale = useLocale();
  const t = messages?.[locale]?.SectionSkills || {};
  const tdcs = t?.dropdown_category_skills || {};
  const [cate, setCate] = useState("all");
  const [elementSkills, setElementSkills] = useState("");
  const { theme, setTheme } = useTheme();
  const [bgParallaxSection, setBgParallaxSection] = useState({
    light: "/images/bg/bg7.jpg",
    dark: "/images/bg/bg10.jpg",
  });

  const cateSkills = [
    { label: tdcs?.all || "", value: "all" },
    { label: tdcs?.language || "", value: "language" },
    { label: tdcs?.["framework&labary"] || "", value: "framework&labary" },
    { label: tdcs?.tools || "", value: "tool" },
  ];

  const changeFillterSkills = () => {
    setElementSkills("");
    setTimeout(() => {
      setElementSkills(() => {
        let elm = skills.map((v, k) => {
          if (v.cate === cate || cate === "all") {
            return (
              <a
                href={v.url}
                className="list-skill shadow"
                key={new Date().getTime + k}
                data-aos="fade-up"
                data-aos-delay={50 * k}
                data-aos-duration="1000"
                data-aos-once={false}
              >
                <img src={v.img} className={`${v.class}`} alt={v.name} />
                <div className="txt-name">{v.label || "-"}</div>
              </a>
            );
          }
        });
        return elm;
      });
    }, 50);
  };

  useEffect(() => {
    changeFillterSkills();
  }, [cate]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      <section id="sec-skills" className="sec-skills">
        <ParallaxSection className={'absolute z-1'} backgroundImage={bgParallaxSection?.[theme] || ""}/>
          <div className="wrapper">
            <div
              className="title-sec"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={false}
            >
              <span className="c-gd f-bol" data-underline="gradient">
                {t?.title || ""}
              </span>
            </div>
            <div
              className="txt-sub-sec"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={false}
            >
              {t?.desc || ""}
            </div>
            <div className="content-box">
              <div
                className="cate-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={false}
              >
                <Dropdown
                  className="dropdown-skills"
                  dataList={cateSkills}
                  defaultValue={"all"}
                  callback={(data) => setCate(data?.value || "all")}
                />
              </div>
              <div
                className="group-skills"
                // data-aos="fade-up"
                // data-aos-duration="1000"
                // data-aos-once={false}
              >
                {elementSkills || ""}
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
