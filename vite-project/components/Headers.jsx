export function Header({ img }) {
  const ValeurLi = ["About", "Services ", "Projects", "Conctact"];
  return (
    <header>
      <nav>
        <img src={img} alt="Logo"></img>
        {ValeurLi.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </nav>
      <h1>WE ARE CREATIVES</h1>
    </header>
  );
}
