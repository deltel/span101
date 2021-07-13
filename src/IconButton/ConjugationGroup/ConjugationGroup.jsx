import React from "react";

import "./ConjugationGroup.css";

import TenseButton from "../Tense/TenseButton";
import VerbButtonGroup from "../Verb/VerbButtonGroup";

const ConjugationGroup = ({
  activeIcon,
  toggleExample,
  toggleTense,
  activeTense,
}) => (
  <div className="ConjugationGroup">
    <TenseButton activeTense={activeTense} handleClick={toggleTense} />
    <VerbButtonGroup activeIcon={activeIcon} handleClick={toggleExample} />
  </div>
);

export default ConjugationGroup;
