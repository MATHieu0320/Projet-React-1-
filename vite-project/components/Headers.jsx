import { useState } from "react";

import IconeHamburger from "../Images/imagesnonresponsive/icon-hamburger.svg";

export function Header({ imgLogo, imgFlechesBas }) {
  const ValeurLi = ["About", "services ", "Projects", "Conctact"];
  // const [Click, UseClick] = useState(false);

  function HandTheClick() {
    const ul = document.getElementById("UlClick");
    // useState(!Click);

    ul.classList.toggle((ul.style.display = "block"));
  }
  return (
    <header>
      <nav>
        <img src={imgLogo} alt="Logo" id="logo"></img>
        <ul id="UlClick">
          {ValeurLi.map((li) => (
            <li key={li}>
              <a href={li}>{li}</a>
            </li>
          ))}
        </ul>
      </nav>{" "}
      <img src={IconeHamburger} onClick={HandTheClick} id="hamburger"></img>
      <h1>WE ARE CREATIVES</h1>
      <div className="ClassImgFLechesBas">
        <img src={imgFlechesBas} alt="imgFlechesBas" id="imgFlechesBas" />
      </div>
    </header>
  );
}
