import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/index.scss";

// function import
import { Header } from "../components/Headers";
import { Main } from "../components/Main";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Footer1 from "../components/TextComponant/Footer1";
// Desktpp img

// mobile img

// AUTRES IMG

import logo from "../Images/imagesnonresponsive/logo.svg";
import FlecheDuBas from "../Images/imagesnonresponsive/icon-arrow-down.svg";
import IconeHamburger from "../Images/imagesnonresponsive/icon-hamburger.svg";

function App() {
  console.log(logo);

  return (
    <>
      <Header imgLogo={logo} imgFlechesBas={FlecheDuBas} />
      <Main />
      <Section1 />
      <Section2 />
      <Footer1 Logo={logo} />
    </>
  );
}

export default App;
