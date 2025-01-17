import React from "react";
import Course from "./Course";
import Events from "./Events";

const Details = () => {
  return (
    <div className="container mt-10 mb-10">
      <div className="flex justify-between gap-2">
        <Course />
        <Events />
      </div>
    </div>
  );
};

export default Details;
