import React from "react";

const Filter = ({ handleFilterName }) => {
  return (
    <div>
      filter shown with
      <input onChange={handleFilterName} />
    </div>
  );
};

export default Filter;
