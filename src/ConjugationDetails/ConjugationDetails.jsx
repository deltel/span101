import React from "react";

import "./ConjugationDetails.css";

import Card from "../Card/Card";
import Details from "../Details/Details";

const ConjugationDetails = ({ conjugates, word, description }) => (
  <div className="ConjugationDetails">
    <p>{description}</p>
    <Card title={word}>
      <Details content={conjugates} />
    </Card>
  </div>
);

export default ConjugationDetails;
