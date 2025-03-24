import React, { useEffect, useState } from "react";
import "@/src/styles/SectionSkills.scss";
import { useTranslations } from "next-intl";

const skills = [
  {
    img: "/images/skills/html.png",
    name: "HTML",
    class: "",
    cate: "language",
    url: "",
  },
  {
    img: "/images/skills/css.png",
    name: "CSS",
    class: "",
    cate: "language",
    url: "",
  },
  {
    img: "/images/skills/js.png",
    name: "JavaScript",
    class: "",
    cate: "language",
    url: "",
  },
  {
    img: "/images/skills/jquery.png",
    name: "JQuery",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/reactjs.svg",
    name: "ReactJS",
    class: "",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/nextjs.png",
    name: "NextJS",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/php.png",
    name: "PHP",
    class: "size-leg",
    cate: "language",
    url: "",
  },
  {
    img: "/images/skills/mysql.png",
    name: "MySQL",
    class: "size-leg",
    cate: "tool",
    url: "",
  },
  {
    img: "/images/skills/mongodb.png",
    name: "MongoDB",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/vue.svg",
    name: "Vue",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/angular.svg",
    name: "Angular",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/less.svg",
    name: "Less",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/scss.svg",
    name: "Scss",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
  {
    img: "/images/skills/tailwind.svg",
    name: "Tailwind",
    class: "size-leg",
    cate: "framework&labary",
    url: "",
  },
];

export default function SectionSkills() {
  const t = useTranslations("SectionSkills");
  const [elementWordFade, setElementWordFade] = useState("");
  const [cate, setCate] = useState("all");
  const [elementSkills, setElementSkills] = useState("");

  const generateWordFade = (word, styleFade = "fade-up") => {
    var wordArr = word.split("");
    var el = [];
    el.push(
      wordArr.map((v, k) => {
        return (
          <span
            key={new Date().getTime + k}
            data-aos={styleFade}
            data-aos-delay={200 * k}
            data-aos-duration="1000"
          >
            {v}
          </span>
        );
      })
    );

    return <div className="group-word-fade">{el}</div>;
  };

  const changeElementSkills = ()=>{
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
              >
                <img src={v.img} className={`${v.class}`} alt={v.name} />
                <div className="txt-name f-lig">{v.name}</div>
              </a>
            );
          }
        });
        return elm;
      });
    }, 50);
  }

  useEffect(() => {
    setElementWordFade(() => {
      return generateWordFade("SKILLS", "fade-down");
    });
  }, []);

  useEffect(() => {
    changeElementSkills();
  }, [cate]);

  return (
    <>
      <div className="section-skills">
        <div className="text-bg f-bol c-bg">{elementWordFade}</div>
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="c-gd f-bol" data-underline="gradient">
              {t("title")}
            </span>
          </div>
          <div
            className="txt-sub-sec f-lig"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t("desc")}
          </div>
          <div className="content-box">
            <div className="cate-box">
              <div className="cate-wrapper">
                <div
                  className={`cate-list ${cate === "all" ? "active" : ""}`}
                  onClick={() => {
                    setCate("all");
                  }}
                >
                  All
                </div>
                <div
                  className={`cate-list ${cate === "language" ? "active" : ""}`}
                  onClick={() => {
                    setCate("language");
                  }}
                >
                  Language
                </div>
                <div
                  className={`cate-list ${
                    cate === "framework&labary" ? "active" : ""
                  }`}
                  onClick={() => {
                    setCate("framework&labary");
                  }}
                >
                  Framework&labary
                </div>
                <div
                  className={`cate-list ${cate === "tool" ? "active" : ""}`}
                  onClick={() => {
                    setCate("tool");
                  }}
                >
                  tool
                </div>
              </div>
            </div>
            <div className="group-skills">{elementSkills || ""}</div>
          </div>
        </div>
      </div>
    </>
  );
}
