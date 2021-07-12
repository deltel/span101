import React from "react";

import "./ConjugationDetails.css";

import Card from "../Card/Card";
import Details from "../Details/Details";

const ConjugationDetails = ({ conjugates, word }) => (
  <div className="ConjugationDetails">
    <p>Used when communicating in the present tense</p>
    <Card title={word}>
      <Details content={conjugates} />
    </Card>
  </div>
);

export default ConjugationDetails;
