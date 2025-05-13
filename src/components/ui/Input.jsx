"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/src/styles/ui/Input.scss";

export default function Input({
  classNameParen = "",
  className = "",
  label = "",
  name = "",
  defaultValue = "",
  required = false,
  disabled = false,
  autoComplete = "off",
  submit = false,
  numberOnly = false,
  setSubmit = () => {},
  messageError = {},
  onChange = () => {},
  validate = () => {},
  callback = () => {},
  minLength = 0,
  maxLength = 999999,
}) {
  const ref = useRef(null);
  const [inputData, setInputData] = useState({
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
    if (numberOnly) {
      if (!/^\d*$/.test(_this?.value)) {
        return;
      }
    }
    // setValue(_this?.value || "");
    setInputData((pre) => ({ ...pre, value: _this?.value || "" }));
  };

  useEffect(() => {
    setSubmit(false);
    setInputData((pre) => ({ ...pre, show_error: false }));
    if (required) {
      if (validate(inputData?.value)?.valid) {
        setInputData((pre) => ({ ...pre, valid: true, message_error: "" }));
        onChange({
          [name]: { ...inputData, valid: true, message_error: "" },
        });
      } else {
        setInputData((pre) => ({
          ...pre,
          valid: false,
          message_error: validate(inputData?.value).message,
        }));
        onChange({
          [name]: {
            ...inputData,
            valid: false,
            message_error: validate(inputData?.value).message,
          },
        });
      }
    } else {
      setInputData((pre) => ({ ...pre, valid: true, message_error: "" }));
      onChange({
        [name]: { ...inputData, valid: true, message_error: "" },
      });
    }
  }, [inputData?.value]);

  useEffect(() => {
    if (submit) {
      setInputData((pre) => ({ ...pre, show_error: true }));
    }
  }, [submit]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <div
      className={`input-wrapper ${classNameParen || ""} ${
        !inputData?.valid && inputData?.show_error ? "input-error" : ""
      }`}
    >
      <div className="input-inner">
        <input
          ref={ref}
          id={`input_${name}`}
          className={`input ${className || ""} ${
            inputData?.value ? "has-value" : ""
          } ${disabled ? "disabled" : ""}`}
          name={inputData?.name || ""}
          value={inputData?.value || ""}
          onChange={(e) => handleChange(e)}
          autoComplete={autoComplete || "off"}
          maxLength={maxLength}
          minLength={minLength}
        />
        {label ? (
          <label htmlFor={`input_${name}`} className="input-label">
            <span>{label}</span>
            {required ? <span className="c-red"> *</span> : ""}
          </label>
        ) : (
          ""
        )}
        {!inputData?.valid && inputData?.show_error ? (
          <div className="message-error">
            <i className="fa-solid fa-circle-exclamation"></i>
            <div className="label-error">
              {messageError?.[inputData?.message_error] || ""}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
