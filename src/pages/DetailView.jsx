import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../Card/Card";
import Details from "../Details/Details";
import EditIcon from "../IconButton/Edit/EditIcon";

import fetchWords from "../utils/executeGet";
import {
  separateDateGroup,
  separateWordGroup,
  transformLabel,
} from "../utils/wordOperations";

const DetailView = () => {
  const [wordGroup, setWordGroup] = useState({});
  const [dateGroup, setDateGroup] = useState({});
  const [title, setTitle] = useState("");

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchWords(
        `http://localhost:4000/words/${params.id}`
      );

      const transformedData = {};
      Object.keys(result[0]).forEach((key) => {
        const capitalLabel = transformLabel(key);
        transformedData[capitalLabel] = result[0][key];
      });

      const newWordGroup = separateWordGroup(transformedData);
      const newDateGroup = separateDateGroup(transformedData);

      setWordGroup(newWordGroup);
      setDateGroup(newDateGroup);
      setTitle(result[0].value);
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      <EditIcon />
      <Card title={title}>
        <Details content={wordGroup} footerContent={dateGroup} />
      </Card>
    </>
  );
};

export default DetailView;
