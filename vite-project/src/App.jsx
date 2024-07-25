import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/index.scss";

// function import
import { Header } from "../components/Headers";

// Desktpp img

import Cornet from "../Images/desktop/image-gallery-cone.jpg";
import BouchonRouge from "../Images/desktop/image-gallery-milkbottles.jpg";
import orange from "../Images/desktop/image-gallery-orange.jpg";
import sucre from "../Images/desktop/image-gallery-sugarcubes.jpg";
import Cerise from "../Images/desktop/image-graphic-design.jpg";
import BackgroundHeader from "../Images/desktop/image-header.jpg";
import FruitsOrange from "../Images/desktop/image-photography.jpg";
import Verre from "../Images/desktop/image-stand-out.jpg";
import Oeuf from "../Images/desktop/image-transform.jpg";

// mobile img

import CornetMobile from "../Images/mobile/image-gallery-cone.jpg";
import BouchonRougeMobile from "../Images/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../Images/mobile/image-gallery-orange.jpg";
import sucreMobile from "../Images/mobile/image-gallery-sugar-cubes.jpg";
import CeriseMobile from "../Images/mobile/image-graphic-design.jpg";
import BackgroundHeaderMobile from "../Images/mobile/image-header.jpg";
import FruitsOrangeMobile from "../Images/mobile/image-photography.jpg";
import VerreMobile from "../Images/mobile/image-stand-out.jpg";
import OeufMobile from "../Images/mobile/image-transform.jpg";

// AUTRES IMG

import logo from "../Images/imagesnonresponsive/logo.svg";
import FlecheDuBas from "../Images/imagesnonresponsive/icon-arrow-down.svg";
import IconeFacebook from "../Images/imagesnonresponsive/icon-facebook.svg";
import IconeIntagram from "../Images/imagesnonresponsive/icon-instagram.svg";
import IconePinterest from "../Images/imagesnonresponsive/icon-pinterest.svg";
import IconeTwitter from "../Images/imagesnonresponsive/icon-twitter.svg";
import IconeHamburger from "../Images/imagesnonresponsive/icon-hamburger.svg";
import ImgEmily from "../Images/imagesnonresponsive/image-emily.jpg";
import ImgJennie from "../Images/imagesnonresponsive/image-jennie.jpg";
import ImgThomas from "../Images/imagesnonresponsive/image-thomas.jpg";

function App() {
  console.log(logo);

  return (
    <>
      <Header
        imgbackground={BackgroundHeader}
        imgLogo={logo}
        imgFlechesBas={FlecheDuBas}
      />
    </>
  );
}

export default App;
