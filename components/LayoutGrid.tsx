import { randomUUID } from "crypto";
import React, { useState, useEffect } from "react";

export default function LayoutGrid() {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    const toggleVisibility = (e: KeyboardEvent) => {
      if (e.key !== "g") return;

      setVisibility(!isVisible);
    };

    document.addEventListener("keydown", toggleVisibility);
    return () => document.removeEventListener("keydown", toggleVisibility);
  });

  return (
    <div
      className={`${
        isVisible ? "grid" : "hidden"
      } absolute top-0 left-0 grid-cols-12 auto-rows-auto w-full h-full p-0 `}
    >
      {Array(12).map((i) => {
        return (
          <p
            key={i}
            className="border-[1px] border-solid bg-black m-0 opacity-20"
          ></p>
        );
      })}
    </div>
  );
}
