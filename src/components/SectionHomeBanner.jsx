"use client"; // ใช้ใน Next.js 13+ เพื่อให้ทำงานฝั่ง Client

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectFade,
  Navigation,
  Autoplay,
  Parallax,
  EffectCards,
} from "swiper/modules"; // นำเข้าโมดูลที่ต้องใช้
import "@/src/styles/SectionHomeBanner.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { useEffect } from "react";

import Image from "next/image";
import imgProfile from "@/public/images/profile.jpg";
import { useTranslations } from "next-intl";

export default function SectionHomeBanner() {
  const t = useTranslations('SectionHomeBanner');
  const getApiHomebanner = async () => {
    try {
      const res = await axios.get("/api/homebanner");
      console.log('res',res.data);
      
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiHomebanner();
  }, []);
  return (
    <>
      <div className="sec-banner">
        <div className="wrapper">
          <div className="overlay-box">
            <div
              className="txt-box"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="txt-1 f-lig">{t('hello')}</div>
              <span className="txt-2 f-bol c-gd">
                {t('fname')} {t('lname')}

              </span>
              <br />
              <TypeAnimation
                wrapper="div"
                sequence={["", 200, `${t('position')}`, 8000, "", 500]}
                className="txt-3"
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
              <div className="txt-4 f-lig">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                accusamus?
              </div>
              <a href="/contact" className="btn-view-more" data-btn="solid black">
                <span>{t('btn-contact')}</span>
              </a>
            </div>
          </div>
          <Swiper
            className="swiper-banner shadow"
            modules={[
              EffectFade,
              EffectCards,
              Navigation,
              Pagination,
              Autoplay,
              Parallax,
            ]}
            // effect="fade"
            speed={2000}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            navigation
            pagination={{ clickable: true }}
            // loop={true}
            parallax={true}
            // effect={"cards"}
            // grabCursor={true}
          >
            {[...Array(1)].map((v, k) => {
              return (
                <>
                  <SwiperSlide key={`${k}${new Date().getTime()}`}>
                    {/* <div className="content-box">
                        <h2 data-swiper-parallax="-200">Slide {k+1}</h2>
                        <p data-swiper-parallax="-100">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div> */}
                    <Image
                      className="img-banner"
                      src={imgProfile}
                      alt="banner"
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
