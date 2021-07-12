import React, { useState } from "react";

// import "./Conjugation.css";

import Card from "../Card/Card";
import ConjugationDetails from "../ConjugationDetails/ConjugationDetails";
import VerbButtonGroup from "../IconButton/Verb/VerbButtonGroup";

const Conjugation = () => {
  const [title] = useState("Present Tense");

  const words = {
    ar: "BAILAR",
    er: "BEBER",
    ir: "VIVIR",
  };
  const [activeWord, setActiveWord] = useState(words.ar);

  const presentTenseConjugates = {
    ar: {
      yo: "bailo",
      tú: "bailas",
      usted: "baila",
      nosotros: "bailamos",
      vosotros: "bailáis",
      ustedes: "bailan",
    },
    er: {
      yo: "bebo",
      tú: "bebes",
      usted: "bebe",
      nosotros: "bebemos",
      vosotros: "bebéis",
      ustedes: "beben",
    },
    ir: {
      yo: "vivo",
      tú: "vives",
      usted: "vive",
      nosotros: "vivimos",
      vosotros: "vivís",
      ustedes: "viven",
    },
  };
  const [conjugates, setConjugates] = useState(presentTenseConjugates.ar);

  const [activeIcon, setActiveIcon] = useState("ar");

  const toggleExample = (targetIdentifier) => {
    if (targetIdentifier === activeIcon) return;
    setActiveIcon(targetIdentifier);
    setActiveWord(words[targetIdentifier]);
    setConjugates(presentTenseConjugates[targetIdentifier]);
  };

  return (
    <>
      <VerbButtonGroup activeIcon={activeIcon} handleClick={toggleExample} />
      <Card title={title} optionalClassName="height-modifier">
        <ConjugationDetails conjugates={conjugates} word={activeWord} />
      </Card>
    </>
  );
};

export default Conjugation;
