"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import "@/src/styles/ui/Dropdown.scss";
import { dataDropdownMock } from "@/src/common";

export default function Dropdown({
  className = "",
  name = "",
  defaultValue = "",
  dataList = dataDropdownMock(),
  callback = () => {},
}) {
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const ddRef = useRef(null);
  const ddScrollRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [dataValue, setDataValue] = useState(
    () => dataList?.filter((v) => v.value == defaultValue)[0] || {}
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (ddRef.current && !ddRef.current.contains(event.target)) {
        setIsOpen(false); // ปิดเมื่อคลิกข้างนอก
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (!ddScrollRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = ddScrollRef.current;

      setIsTop(scrollTop === 0);
      setIsBottom(scrollTop + clientHeight >= scrollHeight);
    };

    const dropdown = ddScrollRef.current;
    dropdown?.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => dropdown?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    // console.log("dataValue", dataValue);
    callback(dataValue);
  }, [dataValue]);

  useEffect(() => {
    // console.log("isBottom", isBottom);
  }, [isBottom]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // ป้องกัน hydration error
  return (
    <>
      <div
        ref={ddRef}
        className={`dd ${className || ""} ${
          dataValue?.value ? "selected" : ""
        } ${isOpen ? "open" : ""}`}
      >
        <div className="dd-inner" onClick={() => setIsOpen(!isOpen)}>
          <span
            className="dd-label"
            dangerouslySetInnerHTML={{
              __html: dataValue?.label || "Plase to seclect",
            }}
          ></span>
          <input
            type="hidden"
            name={name || ""}
            className="dd-input"
            defaultValue={dataValue?.value || ""}
          />
          <i className="ic-dd fa-solid fa-caret-down"></i>
        </div>
        <div className="dd-popup shadow" data-lenis-prevent>
          <div className="dd-popup-card">
            <div className="dd-wrapper" ref={ddScrollRef}>
              {dataList.map((v, i) => (
                <div
                  key={i}
                  className={`dd-list ${
                    v?.value === dataValue?.value ? "active" : ""
                  }`}
                  onClick={() => (setIsOpen(false), setDataValue(v))}
                >
                  <div className="dd-txt">
                    <span
                      dangerouslySetInnerHTML={{ __html: v.label || "" }}
                    ></span>
                  </div>
                  {v?.value === dataValue?.value ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            {/* {!isBottom ? <div className="fade-scroll"></div> : ""} */}
          </div>
        </div>
      </div>
    </>
  );
}
