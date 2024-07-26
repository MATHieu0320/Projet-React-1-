import React from "react";

export const Text = ({ Titre, Paragraphe, img }) => {
  return (
    <div className="grid">
      <div>
        <h2> {Titre} </h2>
        <p> {Paragraphe} </p>
        <span>
          <a href="span">learn more</a>
        </span>
      </div>
      <div>
        <img src={img} />
      </div>
    </div>
  );
};

export default Text;
