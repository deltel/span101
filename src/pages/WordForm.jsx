import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Form from "../Form/Form";
import Card from "../Card/Card";
import {
  endpoint,
  httpCode,
  speechType,
  wordType,
} from "../constants/constants";
import handleError from "../utils/handleError";

const WordForm = ({ edit }) => {
  const initFormData = {
    value: "",
    translation: "",
    category: wordType[0],
    keyword: "",
    part_of_speech: speechType[7],
    example: "",
  };

  const params = useParams();
  const [formData, setFormData] = useState(initFormData);

  useEffect(() => {
    if (!edit) {
      if (localStorage.getItem("currentWord")) {
        localStorage.removeItem("currentWord");
        setFormData({
          value: "",
          translation: "",
          category: wordType[0],
          keyword: "",
          part_of_speech: speechType[7],
          example: "",
        });
      }
      return;
    }

    const currentWord = JSON.parse(localStorage.getItem("currentWord"));

    delete currentWord.id;
    delete currentWord.updated_at;
    delete currentWord.created_at;

    setFormData(currentWord);
  }, [edit]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${endpoint.base}/words/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok)
      localStorage.setItem("currentWord", JSON.stringify(formData));
    else handleError(response); // implement handleError properly
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    const response = await fetch(`${endpoint.base}/words`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === httpCode.CREATED) setFormData(initFormData);
    else handleError(response); // implement error handling
  };

  return (
    <Card title={edit ? "Edit" : "New Word"}>
      <Form
        categories={wordType}
        partsOfSpeech={speechType}
        handleChange={handleChange}
        formState={formData}
        handleSubmit={edit ? handleEdit : handleCreate}
      />
    </Card>
  );
};

export default WordForm;
