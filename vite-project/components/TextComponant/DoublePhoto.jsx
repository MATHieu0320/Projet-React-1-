export const DoublePhoto = ({ img, Titreh3, Paragraphe }) => {
  return (
    <div className="grid">
      <div
        style={{
          backgroundImage: `url( ${img} )`,
        }}>
        <h3> {Titreh3} </h3>
        <p>{Paragraphe}</p>
      </div>
    </div>
  );
};

export default DoublePhoto;
