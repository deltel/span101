import React from "react";
import "./Details.css";

const Details = ({ content, footerContent }) => {
  const footer = footerContent && (
    <div className="footer">
      {Object.keys(footerContent).map((key) => (
        <div key={key}>
          <span className="label">{key}</span>
          <span className="value">{footerContent[key]}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="Details">
      <div className="content">
        {Object.keys(content).map((key) => (
          <div key={key}>
            <span className="label">{key}</span>
            <span className="value">{content[key]}</span>
          </div>
        ))}
      </div>
      {footer}
    </div>
  );
};

export default Details;
