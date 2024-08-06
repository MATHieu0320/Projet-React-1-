import React from "react";

import IconeFacebook from "../../Images/imagesnonresponsive/icon-facebook.svg";
import IconeIntagram from "../../Images/imagesnonresponsive/icon-instagram.svg";
import IconePinterest from "../../Images/imagesnonresponsive/icon-pinterest.svg";
import IconeTwitter from "../../Images/imagesnonresponsive/icon-twitter.svg";

const Footer1 = ({}) => {
  const ListesTexte = ["About", "Services", "Project"];
  const myArray = [
    {
      number: 1,

      image: IconeFacebook,
      title: "IconeFacebook",
    },
    {
      number: 2,
      image: IconeIntagram,
      title: "IconeIntagram",
    },
    {
      number: 3,
      image: IconePinterest,
      title: "IconePinterest",
    },
    {
      number: 4,
      image: IconeTwitter,
      title: "IconeTwitter",
    },
  ];
  return (
    <footer id="Contact">
      <div>
        <h6>sunnyside</h6>
        <ul className="ul-1">
          {ListesTexte.map((Texte) => (
            <li key={Texte.length}>
              <a href={`#` + Texte}> {Texte} </a>
            </li>
          ))}
        </ul>
        <ul className="ul-2">
          {myArray.map((img) => (
            <li key={img.number}>
              <a href={img.title}>
                <img src={img.image} alt={img.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;
