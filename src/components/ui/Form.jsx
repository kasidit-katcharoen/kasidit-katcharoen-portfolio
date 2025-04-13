"use client";

import React, { useEffect, useState } from "react";
import "@/src/styles/SectionContact.scss";
import Input from "@/src/components/ui/Input";
import { validateEmail, validateText } from "@/src/hooks/useCommon";
import Button from "@/src/components/ui/Button";
import { useLocale } from "next-intl";

import Textarea from "@/src/components/ui/Textarea";
import messages from "@/src/messages/messages";

export default function Form() {
  const locale = useLocale();
  const t = messages?.[locale]?.["Form"] || "";
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
    console.log("formValid", formValid);
    if (submit && formValid) {
      setFormData({});
      setSubmit(false);
      alert("submit success!");
    }
  }, [formValid]);

  useEffect(() => {
    // console.log("formData", formData);
  }, [formData]);

  useEffect(() => {
    console.log("submit", submit);
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
      <form
        className="form-box shadow"
        action=""
        onSubmit={(e) => {
          setSubmit(true), e.preventDefault();
        }}
      >
        <div className="wrap-layout" data-layout="grid gap-30 gap-xs-20">
          <div
            className="row"
            data-layout="grid gap-30 gap-xs-20 col-2 col-xs-1"
          >
            <div className="col">
              <Input
                className=""
                type="text"
                name="first_name"
                label={t?.field?.first_name?.label || ""}
                defaultValue={formData?.first_name?.value || ""}
                onChange={(obj) => {
                  updateForm(obj);
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
                defaultValue={formData?.last_name?.value || ""}
                onChange={(obj) => {
                  updateForm(obj);
                }}
                submit={submit}
                setSubmit={setSubmit}
                required={true}
                validate={validateText}
                messageError={t?.messages_error || {}}
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
                label={t?.field?.email?.label || ""}
                defaultValue={formData?.email?.value || ""}
                onChange={(obj) => {
                  updateForm(obj);
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
                defaultValue={formData?.phone?.value || ""}
                onChange={(obj) => {
                  updateForm(obj);
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
                defaultValue={formData?.topic?.value || ""}
                onChange={(obj) => {
                  updateForm(obj);
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
                defaultValue={formData?.contact_desc?.value || ""}
                onChange={(obj) => {
                  updateForm(obj);
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
    </>
  );
}
