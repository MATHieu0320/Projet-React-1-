import React from "react";

const Footer1 = ({ Logo }) => {
  const ListesTexte = ["About", "Services", "Project"];
  const Icones = [];

  return (
    <footer>
      <div>
        <img src={Logo}></img>
        <ul className="ul-1">
          {ListesTexte.map((Texte) => (
            <a href={Texte}>
              <li key={Texte}> {Texte} </li>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;
