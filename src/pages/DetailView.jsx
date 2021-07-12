import React, { useState } from "react";

import Card from "../Card/Card";
import Details from "../Details/Details";
import EditIcon from "../IconButton/Edit/EditIcon";

const DetailView = () => {
  const initWordGroups = {
    Translation: "to have lunch",
    "Part of Speech": "verb",
    Category: "ar",
    Example: "Almuerzo a la una",
    Keyword: "verb",
  };
  const [wordGroups] = useState(initWordGroups);

  const initDateInfo = {
    "Created At": "Wed May 05 2021",
    "Updated At": "Wed May 05 2021",
  };
  const [dateGroup] = useState(initDateInfo);

  return (
    <>
      <EditIcon />
      <Card title="Almorzar">
        <Details content={wordGroups} footerContent={dateGroup} />
      </Card>
    </>
  );
};

export default DetailView;
