import React from "react";
import "./DestCard.css";
import rome from "../assets/rome.jpg";

const DestCard = ({ infoCard }) => {
  console.log("image", infoCard.image);
  return (
    <div>
      <div className="containerCardDest">
        <div className="topCardDest">
          <img src={infoCard.image} alt={infoCard.name} />
        </div>
        <div className="bottomCardDest">
          <div className="nomDest">
            <p className="nomDestP">{infoCard.name}</p>
            {/*  <p className="descDestP">description</p> */}
          </div>
          <div className="prixDest">
            <p>{infoCard.prix}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestCard;
