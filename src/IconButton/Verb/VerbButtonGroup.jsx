import React from "react";

import "./VerbButtonGroup.css";
import "../iconStyle.css";

const VerbButtonGroup = ({ activeIcon, handleClick }) => {
  const isActiveIcon = (className) =>
    className.includes(activeIcon)
      ? `${className} active-conjugate`
      : className;

  return (
    <span className="VerbButtonGroup">
      <button
        type="button"
        className={isActiveIcon("ar-icon")}
        onClick={() => handleClick("ar")}
      >
        AR
      </button>
      <button
        type="button"
        className={isActiveIcon("er-icon")}
        onClick={() => handleClick("er")}
      >
        ER
      </button>
      <button
        type="button"
        className={isActiveIcon("ir-icon")}
        onClick={() => handleClick("ir")}
      >
        IR
      </button>
    </span>
  );
};

export default VerbButtonGroup;
