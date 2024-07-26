export function DoublePhoto({ img, Titreh3, Paragraphe }) {
  <div className="grid">
    <div style={{ backgroundImage: img }}>
      <h3> {Titreh3} </h3>
      <p>{Paragraphe}</p>
    </div>
  </div>;
}
