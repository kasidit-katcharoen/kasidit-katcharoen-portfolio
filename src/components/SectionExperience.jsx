"use client";
import "@/src/styles/SectionExperiences.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { experiences, skills } from "@/src/hooks/useCommon";
import { useLocale } from "next-intl";
import Link from "next/link";
import messages from "../messages/messages";
import Image from "next/image";

let cntYear = 0;
let labelYear = "";
export default function SectionExperiences() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionExperiences"] || "";
  const t_general = messages?.[locale]?.["general"] || "";
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [swiperIsMulti, setSwiperIsMulti] = useState(
    experiences?.[locale]?.length > 15 ? true : false
  );
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const positionsOptions = (posi) => {
    let obj = {
      class: "",
    };
    switch (posi) {
      case "frontend developer":
        obj.class = "is-frontend";
        break;
      case "backend developer":
        obj.class = "is-backend";
        break;
      case "full stack developer":
        obj.class = "is-fullstack";
        break;
      default:
        obj.class = "is-frontend";
        break;
    }
    return obj;
  };

  useEffect(() => {
    // ถ้า swiper โหลดแล้วค่อย init navigation
    if (swiperRef?.current?.params && swiperRef?.current?.navigation) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy(); // รีของเก่า
      swiperRef.current.navigation.init(); // init ใหม่
      swiperRef.current.navigation.update(); // update ใหม่
    }
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      {experiences?.[locale]?.length > 0 ? (
        <div id="sec-experiences" className="sec-experiences">
          <div className="wrapper">
            <div
              className="title-sec"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={false}
            >
              <h2 className="c-gd f-bol" data-underline="gradient">
                {t?.title || ""}
              </h2>
            </div>
            <div
              className="content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={false}
            >
              <Swiper
                className="swiper-experiences"
                modules={[Autoplay, Navigation, FreeMode, Mousewheel]}
                pagination={{ clickable: true }}
                speed={500}
                freeMode={true}
                mousewheel={{
                  forceToAxis: true,
                  // sensitivity: 0.8, // นี่แหละ "ความหนึด"
                  // releaseOnEdges: true,
                }}
                // autoplay={
                //   swiperIsMulti
                //     ? { delay: 5000, disableOnInteraction: false }
                //     : false
                // }
                // loop={swiperIsMulti}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper; // เก็บ instance เอาไว้ใช้ใน useEffect
                }}
                slidesPerView={"auto"}
                // autoHeight={true}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
              >
                <div className="line"></div>
                {experiences?.[locale]?.map((v, i) => {
                  if (v?.year != cntYear) {
                    cntYear = v?.year;
                    labelYear = v?.year;
                  } else {
                    labelYear = "";
                  }

                  return (
                    <SwiperSlide
                      key={i}
                      data-cursor-label={t_general?.drag || ""}
                    >
                      {labelYear ? (
                        <div className="year-box">
                          <div className="txt-year f-reg">{labelYear}</div>
                          <div className="dot"></div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="card shadow">
                        {v?.img ? (
                          <div className="img-box">
                            <Image src={v?.img} alt="" />
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="detail-box">
                          <div className="txt-box">
                            {v?.url ? (
                              <Link
                                href={v?.url || ""}
                                target={"bank"}
                                className="txt-name f-reg"
                                data-cursor-label={t_general?.link || ""}
                              >
                                <h3>{v?.name || v?.type || ""}</h3>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              </Link>
                            ) : (
                              <h3 className="txt-name f-reg">
                                {v?.name || v?.type || ""}
                              </h3>
                            )}
                            {v?.desc ? (
                              Array.isArray(v?.desc) ? (
                                <ul className="txt-desc">
                                  {v?.desc.map((vv, ii) => (
                                    <li key={ii} className="list-desc">
                                      {vv || ""}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <div className="txt-desc">{v?.desc || ""}</div>
                              )
                            ) : (
                              ""
                            )}
                            {/* {v?.desc ? (
                              <ul className="txt-desc">
                                {Array.isArray(v?.desc)
                                  ? v?.desc.map((vv, ii) => (
                                      <li key={ii} className="list-desc">{vv || ""}</li>
                                    ))
                                  : v?.desc || ""}
                              </ul>
                            ) : (
                              ""
                            )} */}
                          </div>
                          <div className="group-tag">
                            {v?.owner ? (
                              <div className="tag-list">{v?.owner || ""}</div>
                            ) : (
                              ""
                            )}
                            <div className="tag-list f-reg">
                              {v?.year || ""}
                            </div>
                          </div>
                          <div className="group-tag">
                            {v?.positions?.map((vv, ii) => (
                              <div
                                key={ii}
                                className={`tag-list f-reg ${
                                  positionsOptions(vv)?.class || ""
                                }`}
                              >
                                {vv || ""}
                              </div>
                            )) || ""}
                            {v?.responsibility?.map((vv, ii) => (
                              <div key={ii} className={`tag-list f-reg`}>
                                {vv || ""}
                              </div>
                            )) || ""}
                          </div>
                          <div className="group-tag">
                            {v?.tools?.map((vv, ii) => (
                              <div key={ii} className="tag-list img">
                                <img
                                  className={`${
                                    skills?.filter((d) => d?.name == vv)[0]
                                      ?.class
                                  }`}
                                  src={`${
                                    skills?.filter((d) => d?.name == vv)[0]?.img
                                  }`}
                                  alt=""
                                />
                              </div>
                            )) || ""}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }) || ""}
                {swiperIsMulti ? (
                  <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                ) : (
                  ""
                )}

                <div className="wrap-btn">
                  <button
                    title="button-prev"
                    ref={prevRef}
                    className="swiper-button-prev shadow"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    title="button-next"
                    ref={nextRef}
                    className="swiper-button-next shadow"
                    data-cursor-label={t_general?.click || ""}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Swiper>
              <div
                className="note-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={false}
              >
                {t?.note || ""}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
