import React, { useState } from "react";

import Card from "../components/Card/Card";
import ConjugationDetails from "../components/ConjugationDetails/ConjugationDetails";
import ConjugationGroup from "../components/IconButton/ConjugationGroup/ConjugationGroup";

import {
  preteriteTenseConjugates,
  presentTenseConjugates,
  words,
  tense,
  description,
} from "../constants/constants";

const Conjugation = () => {
  const [title, setTitle] = useState(tense.PRESENT_TENSE);
  const [paragraph, setParagraph] = useState(description.PRESENT_TENSE);
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
      setTitle(tense.PRETERITE_TENSE);
      setParagraph(description.PRETERITE_TENSE);
    } else {
      setConjugates(presentTenseConjugates[activeIcon]);
      setTitle(tense.PRESENT_TENSE);
      setParagraph(description.PRESENT_TENSE);
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
        <ConjugationDetails
          conjugates={conjugates}
          word={activeWord}
          description={paragraph}
        />
      </Card>
    </>
  );
};

export default Conjugation;
