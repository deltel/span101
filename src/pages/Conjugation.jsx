import React, { useState } from "react";

import Card from "../Card/Card";
import ConjugationDetails from "../ConjugationDetails/ConjugationDetails";
import ConjugationGroup from "../IconButton/ConjugationGroup/ConjugationGroup";

import {
  preteriteTenseConjugates,
  presentTenseConjugates,
  words,
} from "../constants/constants";

const Conjugation = () => {
  const [title] = useState("Present Tense");
  const [activeWord, setActiveWord] = useState(words.ar);
  const [conjugates, setConjugates] = useState(presentTenseConjugates.ar);
  const [activeIcon, setActiveIcon] = useState("ar");
  const [activeTense, setActiveTense] = useState("present");

  const toggleExample = (targetIdentifier) => {
    if (targetIdentifier === activeIcon) return;
    setActiveIcon(targetIdentifier);
    setActiveWord(words[targetIdentifier]);

    if (activeTense === "present") {
      setConjugates(presentTenseConjugates[targetIdentifier]);
    } else {
      setConjugates(preteriteTenseConjugates[targetIdentifier]);
    }
  };

  const toggleTense = (targetIdentifier) => {
    if (targetIdentifier === activeTense) return;

    setActiveTense(targetIdentifier);

    if (activeTense === "present") {
      setConjugates(preteriteTenseConjugates[activeIcon]);
    } else {
      setConjugates(presentTenseConjugates[activeIcon]);
    }
  };

  return (
    <>
      <ConjugationGroup
        activeIcon={activeIcon}
        activeTense={activeTense}
        toggleExample={toggleExample}
        toggleTense={toggleTense}
      />
      <Card title={title} optionalClassName="height-modifier">
        <ConjugationDetails conjugates={conjugates} word={activeWord} />
      </Card>
    </>
  );
};

export default Conjugation;
