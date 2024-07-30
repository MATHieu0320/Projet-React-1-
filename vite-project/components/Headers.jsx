import IconeHamburger from "../Images/imagesnonresponsive/icon-hamburger.svg";
export function Header({ imgLogo, imgFlechesBas }) {
  const ValeurLi = ["About", "services ", "Projects", "Conctact"];
  return (
    <header>
      <nav>
        <img src={imgLogo} alt="Logo" id="logo"></img>
        <ul>
          {ValeurLi.map((li) => (
            <li key={li}>
              <a href={li}>{li}</a>
            </li>
          ))}
        </ul>
        <img src={IconeHamburger} id="hamburger"></img>
      </nav>
      <h1>WE ARE CREATIVES</h1>
      <div className="ClassImgFLechesBas">
        <img src={imgFlechesBas} alt="imgFlechesBas" id="imgFlechesBas" />
      </div>
    </header>
  );
}
