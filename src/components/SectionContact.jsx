"use client";

import React, { useEffect, useState } from "react";
import "@/src/styles/SectionContact.scss";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import Input from "./ui/Input";
import Form from "./ui/Form";
import { validateEmail, validateText } from "../hooks/useCommon";
import Button from "./ui/Button";
import { useLocale } from "next-intl";
import messages from "../messages/messages";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "../lib/utils";
import Textarea from "./ui/Textarea";

export default function SectionContact() {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = messages?.[locale]?.["Form"] || "";
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({});
  const [formValid, setFormValid] = useState(false);

  const onInputChange = (obj) => {
    setFormData((pre) => {
      return { ...pre, ...obj };
    });
  };

  const checkFormValid = (obj) => {
    let valid = true;
    Object.keys(formData).forEach((key) => {
      if (formData[key]?.required && !formData[key]?.valid) {
        valid = false;
      }
    });
    setFormValid(valid);
  };

  useEffect(() => {
    console.log("formValid", formValid);
    if (formValid) {
      setFormData({})
      alert('summit success!')
    }
  }, [formValid]);

  useEffect(() => {
    if (submit) {
      console.log("formData", formData);
      checkFormValid();
    }
  }, [formData]);

  useEffect(() => {
    console.log("submit", submit);
  }, [submit]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      <div className="sec-contact">
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4820.592538759047!2d102.41681327237538!3d15.599897240061214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zNy8yIOC4li7guKvguJnguK3guIfguILguLLguKEgNSDguJUu4Lia4Lix4Lin4LmD4Lir4LiN4LmIIOC4rS7guJrguLHguKfguYPguKvguI3guYgg4LiZ4LiE4Lij4Lij4Liy4LiK4Liq4Li14Lih4LiyIDMwMTIwIOC4m-C4o-C4sOC5gOC4l-C4qOC5hOC4l-C4og!5e0!3m2!1sth!2sth!4v1743064990055!5m2!1sth!2sth"
            style={{border:0,width:"100vw",height:"600px"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        {/* <div className="absolute inset-0 z-1 flex size-full items-center justify-center">
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] "
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
              ติดต่อ
            </span>
          </div>
          <div
            className="content-box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <div className="card-form">
              {/* <img
                className="img-form"
                src={`${
                  theme == "light"
                    ? "/images/home/bg15.jpg"
                    : "/images/home/bg2.jpg"
                }`}
                alt="bg"
              /> */}
              <form
                className="form-box shadow"
                action=""
                onSubmit={(e) => {
                  setSubmit(true), e.preventDefault();
                }}
              >
                <div className="wrap-layout" data-layout="grid gap-30 gap-xs-20">
                  <div className="row" data-layout="grid gap-30 gap-xs-20 col-2 col-xs-1">
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="first_name"
                        label={t?.field?.first_name?.label || ""}
                        defaultValue={formData?.first_name?.value||''}
                        onChange={(obj) => {
                          onInputChange(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t?.messages_error || {}}
                      />
                    </div>
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="last_name"
                        label={t?.field?.last_name?.label || ""}
                        defaultValue={formData?.last_name?.value||''}
                        onChange={(obj) => {
                          onInputChange(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t?.messages_error || {}}
                      />
                    </div>
                  </div>
                  <div className="row" data-layout="grid gap-30 gap-xs-20 col-2 col-xs-1">
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="email"
                        label={t?.field?.email?.label || ""}
                        defaultValue={formData?.email?.value||''}
                        onChange={(obj) => {
                          onInputChange(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateEmail}
                        messageError={t?.messages_error || {}}
                      />
                    </div>
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="phone"
                        label={t?.field?.phone?.label || ""}
                        defaultValue={formData?.phone?.value||''}
                        onChange={(obj) => {
                          onInputChange(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t?.messages_error || {}}
                      />
                    </div>
                  </div>
                  <div className="row" data-layout="grid gap-30 gap-xs-20">
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="topic"
                        label={t?.field?.contact_topic?.label || ""}
                        defaultValue={formData?.topic?.value||''}
                        onChange={(obj) => {
                          onInputChange(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t?.messages_error || {}}
                      />
                    </div>
                    <div className="col">
                      <Textarea
                        className=""
                        name="contact_desc"
                        label={t?.field?.contact_desc?.label || ""}
                        defaultValue={formData?.contact_desc?.value||''}
                        onChange={(obj) => {
                          onInputChange(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t?.messages_error || {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrap-btn">
                  <Button type="submit" className={`btn-submit`}>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Marquee
          className={"marquee-text f-bol"}
          speed={50}
          loop={99}
          // pauseOnHover={true}
          // gradient={true}
          // gradientColor={'#000000'}
        >
          {[...Array(5)].map((v, i) => {
            if (i / 2 === 0) {
              return `KASIDIT KATCHAROEN PORTFOLIO`;
            } else {
              return ` `;
            }
          })}
        </Marquee>
      </div>
    </>
  );
}
