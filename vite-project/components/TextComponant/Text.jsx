import React from "react";

const Text = (h2, paragraphe, span) => {
  return (
    <div className="grid">
      <h2> {h2} </h2>
      <p> {paragraphe} </p>
      <span>
        <a href={span}> {span} </a>
      </span>
    </div>
  );
};

export default Text;
