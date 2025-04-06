import React, { useEffect, useState } from "react";
import "@/src/styles/SectionSkills.scss";
import { useLocale } from "next-intl";
import Dropdown from "@/src/components/ui/Dropdown";
import messages from "@/src/messages/messages.jsx";
import { Particles } from "./magicui/particles";
import { useTheme } from "next-themes";
import { getTheme } from "../hooks/useThemeData";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";

const skills = [
  {
    img: "/images/skills/html.svg",
    name: "HTML",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/css.svg",
    name: "CSS",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/less.svg",
    name: "Less",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/scss.svg",
    name: "Scss",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/tailwind.svg",
    name: "Tailwind",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/js.svg",
    name: "JavaScript",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/jquery.svg",
    name: "JQuery",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/reactjs.svg",
    name: "ReactJS",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/nextjs.svg",
    name: "NextJS",
    class: "size-leg theme-dark-invert",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/php.svg",
    name: "PHP",
    class: "size-leg",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/vue.svg",
    name: "Vue",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/angular.svg",
    name: "Angular",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/mysql.svg",
    name: "MySQL",
    class: "size-leg",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/mongodb.svg",
    name: "MongoDB",
    class: "size-leg",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/vscode.svg",
    name: "VS Code",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/postman.svg",
    name: "Postman",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/sourcetree.svg",
    name: "Sourcetree",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/filezilla.svg",
    name: "FileZilla",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/figma.svg",
    name: "Figma",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/postgresSQL.svg",
    name: "PostgresSQL",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/fibery.png",
    name: "Fibery",
    class: "",
    cate: "tool",
    url: null,
  },
];
export default function SectionSkills() {
  const locale = useLocale();
  const t = messages?.[locale]?.SectionSkills || {};
  const tdcs = t?.dropdown_category_skills || {};
  const [cate, setCate] = useState("all");
  const [elementSkills, setElementSkills] = useState("");
  const { theme, setTheme } = useTheme();
  const [particlesColor, setParticlesColor] = useState(
    getTheme(theme).particlesColor || []
  );
  const [elementParticles, setElementParticles] = useState("");

  useEffect(() => {
    setParticlesColor(getTheme(theme).particlesColor || []);
  }, [theme]);

  useEffect(() => {
    setElementParticles(() => (
      <>
        {particlesColor
          ? particlesColor.map((v, k) => (
              <Particles
                key={k}
                className="absolute inset-0 z-1"
                size={0.8}
                staticity={50}
                quantity={getTheme(theme).particlesQuantity / particlesColor.length}
                ease={80}
                color={v || ""}
                refresh
              />
            ))
          : ""}
      </>
    ));
  }, [particlesColor]);

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
                data-aos-once={true}
              >
                <img src={v.img} className={`${v.class}`} alt={v.name} />
                <div className="txt-name">{v.name}</div>
              </a>
            );
          }
        });
        return elm;
      });
    }, 10);
  };

  useEffect(() => {
    changeFillterSkills();
  }, [cate]);
  return (
    <>
      <div className="section-skills">
        {/* {elementParticles || ""} */}
        {/* <div className="absolute inset-0 z-1 flex size-full items-center justify-center">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            )}
          />
        </div> */}
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <span className="c-gd f-bol" data-underline="gradient">
              {t?.title || ""}
            </span>
          </div>
          <div
            className="txt-sub-sec"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            {t?.desc || ""}
          </div>
          <div className="content-box">
            <div
              className="cate-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={true}
            >
              <Dropdown
                className="dropdown-skills"
                dataList={cateSkills}
                defaultValue={"all"}
                callback={(data) => setCate(data?.value || "all")}
              />
            </div>
            <div className="group-skills">{elementSkills || ""}</div>
          </div>
        </div>
      </div>
    </>
  );
}
