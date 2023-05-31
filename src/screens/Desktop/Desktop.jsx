import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Desktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="desktop">
      <div
        className="iphone-plus"
        style={{
          height:
            screenWidth < 834
              ? "926px"
              : screenWidth >= 834 && screenWidth < 1117
              ? "1194px"
              : screenWidth >= 1117 && screenWidth < 1440
              ? "1728px"
              : screenWidth >= 1440
              ? "1024px"
              : undefined,
          width:
            screenWidth < 834
              ? "428px"
              : screenWidth >= 834 && screenWidth < 1117
              ? "834px"
              : screenWidth >= 1117 && screenWidth < 1440
              ? "1117px"
              : screenWidth >= 1440
              ? "1440px"
              : undefined,
        }}
      />
    </div>
  );
};
