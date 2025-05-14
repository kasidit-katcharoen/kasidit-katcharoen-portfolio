"use client";

import React, { useEffect, useState } from "react";
import "@/src/styles/SectionContact.scss";
import Input from "./ui/Input";
import { validateEmail, validateText, validPhone } from "../hooks/useCommon";
import Button from "./ui/Button";
import { useLocale } from "next-intl";
import messages from "../messages/messages";
import Textarea from "./ui/Textarea";
import Marquee from "react-fast-marquee";

export default function SectionContactCustom() {
  const locale = useLocale();
  const t = messages?.[locale]?.["SectionContact"] || "";
  const t_form = messages?.[locale]?.["Form"] || "";
  const [formData, setFormData] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const updateForm = (obj) => {
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
    // console.log("formValid", formValid);
    if (submit && formValid) {
      setFormData({});
      setSubmit(false);
      // alert("submit success!");
    }
  }, [formValid]);

  useEffect(() => {
    // console.log("formData", formData);
  }, [formData]);

  useEffect(() => {
    // console.log("submit", submit);
    if (submit) {
      checkFormValid();
    }
  }, [submit]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      <div id="sec-contact" className="sec-contact">
        <div className="wrapper">
          <div
            className="title-sec"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once={false}
          >
            <h2 className="c-gd f-bol" data-underline="gradient">
              {t?.title || ""}
            </h2>
          </div>
          <div
            className="content-box"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once={false}
          >
            <div className="card-form">
              <form
                className="form-box shadow"
                action=""
                onSubmit={(e) => {
                  setSubmit(true), e.preventDefault();
                }}
              >
                <div className="title-form f-bol">Form Contact </div>
                <div
                  className="wrap-layout"
                  data-layout="grid gap-30 gap-xs-20"
                >
                  <div
                    className="row"
                    data-layout="grid gap-30 gap-xs-20 col-2 col-xs-1"
                  >
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="first_name"
                        label={t_form?.field?.first_name?.label || ""}
                        defaultValue={formData?.first_name?.value || ""}
                        onChange={(obj) => {
                          updateForm(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t_form?.messages_error || {}}
                      />
                    </div>
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="last_name"
                        label={t_form?.field?.last_name?.label || ""}
                        defaultValue={formData?.last_name?.value || ""}
                        onChange={(obj) => {
                          updateForm(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t_form?.messages_error || {}}
                      />
                    </div>
                  </div>
                  <div
                    className="row"
                    data-layout="grid gap-30 gap-xs-20 col-2 col-xs-1"
                  >
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="email"
                        label={t_form?.field?.email?.label || ""}
                        defaultValue={formData?.email?.value || ""}
                        onChange={(obj) => {
                          updateForm(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateEmail}
                        messageError={t_form?.messages_error || {}}
                      />
                    </div>
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="phone"
                        label={t_form?.field?.phone?.label || ""}
                        defaultValue={formData?.phone?.value || ""}
                        onChange={(obj) => {
                          updateForm(obj);
                        }}
                        numberOnly={true}
                        maxLength={10}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validPhone}
                        messageError={t_form?.messages_error || {}}
                      />
                    </div>
                  </div>
                  <div className="row" data-layout="grid gap-30 gap-xs-20">
                    <div className="col">
                      <Input
                        className=""
                        type="text"
                        name="topic"
                        label={t_form?.field?.contact_topic?.label || ""}
                        defaultValue={formData?.topic?.value || ""}
                        onChange={(obj) => {
                          updateForm(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t_form?.messages_error || {}}
                      />
                    </div>
                    <div className="col">
                      <Textarea
                        className=""
                        name="contact_desc"
                        label={t_form?.field?.contact_desc?.label || ""}
                        defaultValue={formData?.contact_desc?.value || ""}
                        onChange={(obj) => {
                          updateForm(obj);
                        }}
                        submit={submit}
                        setSubmit={setSubmit}
                        required={true}
                        validate={validateText}
                        messageError={t_form?.messages_error || {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrap-btn">
                  <Button
                    type="submit"
                    className={`btn-submit`}
                    icon={<i className="fa-solid fa-circle-check"></i>}
                  >
                    {t_form?.submit || ""}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <Marquee
          className={"marquee-text f-bol"}
          speed={50}
          loop={99}
          // pauseOnHover={true}
          // gradient={true}
          // gradientColor={'#000000'}
        >
          {[...Array(5)].map((v, i) => `KASIDIT KATCHAROEN PORTFOLIO`)}
        </Marquee> */}
      </div>
    </>
  );
}
