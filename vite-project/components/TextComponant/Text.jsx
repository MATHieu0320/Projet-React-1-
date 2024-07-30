import React from "react";

export const Text = ({ Titre, Paragraphe, img, className, id }) => {
  return (
    <div className={className}>
      <div className="flex-Texte">
        ererza
        <div className="Margin">
          <h2> {Titre} </h2>
          <p> {Paragraphe} </p>
          <span id={id}>
            <a href="span">learn more</a>
          </span>
        </div>
      </div>
      <div className="flex-img">
        <img srcSet="" sizes={"33.33vw"} src={img} />
      </div>
    </div>
  );
};

export default Text;
