"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/src/styles/ui/Textarea.scss";

export default function Textarea({
  classNameParen = "",
  className = "",
  label = "",
  name = "",
  defaultValue = "",
  required = false,
  disabled = false,
  autoComplete = "off",
  submit = false,
  rows = 5,
  setSubmit = () => {},
  messageError = {},
  onChange = () => {},
  validate = () => {},
  callback = () => {},
}) {
  const ref = useRef(null);
  const [textareaData, setTextareaData] = useState({
    name: name || "",
    ref: ref,
    value: defaultValue || "",
    valid: !required,
    required: required,
    message_error: "",
    show_error: false,
  });

  const handleChange = (e) => {
    const _this = e.target;
    // setValue(_this?.value || "");
    setTextareaData((pre) => ({ ...pre, value: _this?.value || "" }));
  };

  useEffect(() => {
    setSubmit(false);
    setTextareaData((pre) => ({ ...pre, show_error: false }));
    if (required) {
      if (validate(textareaData?.value)?.valid) {
        setTextareaData((pre) => ({ ...pre, valid: true, message_error: "" }));
        onChange({
          [name]: { ...textareaData, valid: true, message_error: "" },
        });
      } else {
        setTextareaData((pre) => ({
          ...pre,
          valid: false,
          message_error: validate(textareaData?.value).message,
        }));
        onChange({
          [name]: {
            ...textareaData,
            valid: false,
            message_error: validate(textareaData?.value).message,
          },
        });
      }
    } else {
      setTextareaData((pre) => ({ ...pre, valid: true, message_error: "" }));
      onChange({
        [name]: { ...textareaData, valid: true, message_error: "" },
      });
    }
  }, [textareaData?.value]);

  useEffect(() => {
    if (submit) {
      setTextareaData((pre) => ({ ...pre, show_error: true }));
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
        !textareaData?.valid && textareaData?.show_error ? "textarea-error" : ""
      }`}
    >
      <div className="textarea-inner">
        <textarea
          ref={ref}
          id={`textarea_${name}`}
          className={`input ${className || ""} ${textareaData?.value ? "has-value" : ""} ${
            disabled ? "disabled" : ""
          }`}
          name={textareaData?.name || ""}
          value={textareaData?.value || ""}
          rows={rows}
          onChange={(e) => handleChange(e)}
          autoComplete={autoComplete || "off"}
        />
        {label ? (
          <label htmlFor={`textarea_${name}`} className="textarea-label">
            <span>{label}</span>
            {required ? <span className="c-red"> *</span> : ""}
          </label>
        ) : (
          ""
        )}
        {!textareaData?.valid && textareaData?.show_error ? (
          <div className="message-error">
            <i className="fa-solid fa-circle-exclamation"></i>
            <div className="label-error">
              {messageError?.[textareaData?.message_error] || ""}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
