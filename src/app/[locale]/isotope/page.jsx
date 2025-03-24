"use client"; // ✅ บอก Next.js ว่านี่เป็น Client Component

import { useEffect, useRef, useState } from "react";

const IsotopeGrid = () => {
  const gridRef = useRef(null);
  const iso = useRef(null);
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    // ✅ โหลด Isotope.js เฉพาะตอนรันใน client-side
    import("isotope-layout").then((Isotope) => {
      iso.current = new Isotope.default(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    });

    return () => {
      iso.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (iso.current) {
      iso.current.arrange({ filter });
    }
  }, [filter]);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="filters">
        <button onClick={() => setFilter("*")}>Show All</button>
        <button onClick={() => setFilter(".category-a")}>Category A</button>
        <button onClick={() => setFilter(".category-b")}>Category B</button>
      </div>

      {/* Grid Items */}
      <div className="grid" ref={gridRef}>
        <div className="grid-item category-a">Item 1 (A)</div>
        <div className="grid-item category-b">Item 2 (B)</div>
        <div className="grid-item category-a">Item 3 (A)</div>
        <div className="grid-item category-b">Item 4 (B)</div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .grid-item {
          width: 100px;
          height: 100px;
          background: lightblue;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border: 1px solid #333;
        }
        .filters button {
          margin-right: 10px;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  );
};

export default IsotopeGrid;
