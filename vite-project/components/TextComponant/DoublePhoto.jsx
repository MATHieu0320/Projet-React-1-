export const DoublePhoto = ({ img, Titreh3, Paragraphe, Class }) => {
  return (
    <div className="grid">
      <img src={img} alt={img} />
      <div className={Class}>
        <h3> {Titreh3} </h3>
        <p>{Paragraphe}</p>
      </div>
    </div>
  );
};

export default DoublePhoto;
