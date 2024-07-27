import React from "react";
import Clients from "./TextComponant/Clients";
// img clients
import ImgEmily from "../Images/imagesnonresponsive/image-emily.jpg";
import ImgJennie from "../Images/imagesnonresponsive/image-jennie.jpg";
import ImgThomas from "../Images/imagesnonresponsive/image-thomas.jpg";
export const Section1 = () => {
  return (
    <section className="section1">
      <h4>client testimonials</h4>
      <div className="Flex">
        <Clients
          img={ImgEmily}
          Prenom={"Emily R."}
          role={"Marketing Director"}
          Texte={
            "We put our trust in Sunnyside and they delivered,making sure our needs were met and deadlines were always hit."
          }
        />
        <Clients
          img={ImgThomas}
          Prenom={"Thomas S."}
          role={"Chief Operating  Officer"}
        />
        <Clients
          img={ImgJennie}
          Prenom={"Jennie F."}
          role={"Buisiness Owner"}
        />
      </div>
    </section>
  );
};

export default Section1;
