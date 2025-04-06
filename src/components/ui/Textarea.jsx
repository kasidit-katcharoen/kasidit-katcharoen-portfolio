"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/src/styles/ui/Textarea.scss";
import { useLocale } from "next-intl";

export default function Textarea({
  classNameParen = "",
  className = "",
  label = "",
  name = "",
  defaultValue = "",
  required = false,
  disabled = false,
  autoComplete = "off",
  rows = 4,
  submit = false,
  setSubmit = () => {},
  messageError = {},
  onChange = () => {},
  validate = () => {},
  callback = () => {},
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(defaultValue || "");
  const [valid, setValid] = useState({ status: false, message: "" });
  const locale = useLocale();

  const handleChange = (e) => {
    const _this = e.target;
    setValue(_this?.value || "");
  };

  useEffect(() => {
    onChange({
      [name || ""]: {
        ref: ref,
        value: value || "",
        required: required,
        valid: valid?.status,
        message: valid?.message,
      },
    });
  }, [value, valid]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setSubmit(false);
    setValid({ status: true, message: "" });
  }, [value]);

  useEffect(() => {
    if (submit) {
      if (required) {
        if (validate(value)?.valid) {
          setValid({ status: true, message: "" });
        } else {
          setValid({ status: false, message: validate(value).message });
        }
      } else {
        setValid({ status: true, message: "" });
      }
    }
  }, [submit]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <div
      className={`textarea-wrapper ${classNameParen || ""} ${
        !valid?.status ? "textarea-error" : ""
      }`}
    >
      <div className="textarea-inner">
        <textarea
          ref={ref}
          className={`textarea ${className || ""} ${value ? "has-value" : ""} ${
            disabled ? "disable" : ""
          }`}
          name={name || ""}
          value={value || ""}
          onChange={(e) => handleChange(e)}
          autoComplete={autoComplete || "off"}
          rows={rows}
        />
        {label ? (
          <label className="textarea-label">
            <span>{label}</span>
            {required ? <span className="c-red"> *</span> : ""}
          </label>
        ) : (
          ""
        )}
        {!valid?.status ? (
          <div className="message-error">
            <i className="fa-solid fa-circle-exclamation"></i>
            <div className="label-error">
              {messageError?.[valid?.message] || ""}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
