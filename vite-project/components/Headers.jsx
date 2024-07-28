export function Header({ imgLogo, imgFlechesBas }) {
  const ValeurLi = ["About", "services ", "Projects", "Conctact"];
  return (
    <header>
      <nav>
        <img src={imgLogo} alt="Logo"></img>
        <ul>
          {ValeurLi.map((li) => (
            <li key={li}>
              <a href={li}>{li}</a>
            </li>
          ))}
        </ul>
      </nav>
      <h1>WE ARE CREATIVES</h1>
      <img src={imgFlechesBas} alt="imgFlechesBas" />
    </header>
  );
}
