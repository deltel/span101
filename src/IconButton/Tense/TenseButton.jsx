import React from "react";

import "./TenseButton.css";

const TenseButton = ({ handleClick }) => (
  <select
    name="tense"
    id="tense"
    className="TenseButton"
    onChange={(e) => handleClick(e.target.value)}
    defaultValue="present"
  >
    <option value="present">Present Tense</option>
    <option value="preterite">Preterite Tense</option>
  </select>
);

export default TenseButton;
