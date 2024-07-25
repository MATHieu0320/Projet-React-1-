export function Header({ imgbackground, imgLogo, imgFlechesBas }) {
  const ValeurLi = ["About", "services ", "Projects", "Conctact"];
  return (
    <header
      style={{
        backgroundImage: `url( ${imgbackground} )`,
      }}>
      <nav>
        <img src={imgLogo} alt="Logo"></img>
        {ValeurLi.map((li) => (
          <li key={li}>
            <a href={li}>{li}</a>
          </li>
        ))}
      </nav>
      <h1>WE ARE CREATIVES</h1>
      <img src={imgFlechesBas} alt="imgFlechesBas" />
    </header>
  );
}
