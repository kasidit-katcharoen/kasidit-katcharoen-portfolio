"use client"; // ✅ ต้องเพิ่มบรรทัดนี้!

import React from "react";

export default function ErrorPage({ error, reset }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>เกิดข้อผิดพลาด 😢</h1>
      <p>{error?.message || "มีบางอย่างผิดพลาด"}</p>
      <button onClick={() => reset()}>ลองใหม่</button>
    </div>
  );
}
