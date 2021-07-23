import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Form from "../Form/Form";
import Card from "../Card/Card";
import { speechType, wordType } from "../constants/constants";

const WordForm = () => {
  const params = useParams();
  const [formData, setFormData] = useState({
    value: "",
    translation: "",
    category: "",
    keyword: "",
    part_of_speech: "",
    example: "",
  });

  useEffect(() => {
    const currentWord = JSON.parse(localStorage.getItem("currentWord"));

    delete currentWord.id;
    delete currentWord.updated_at;
    delete currentWord.created_at;

    setFormData(currentWord);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:4000/words/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok)
      localStorage.setItem("currentWord", JSON.stringify(formData));
    //  handle error

    // else {
    // const responseJson = await response.json();
    // console.log(responseJson.error);
    // }
  };

  return (
    <Card title="New Word">
      <Form
        categories={wordType}
        partsOfSpeech={speechType}
        handleChange={handleChange}
        formState={formData}
        handleSubmit={handleSubmit}
      />
    </Card>
  );
};

export default WordForm;
