import React from "react";
import "./DestCard.css";
import rome from "../assets/rome.jpg";
import { Link } from "react-router-dom";

const DestCard = ({ infoCard }) => {
  const detailId = `details/${infoCard.id}`;
  // console.log("image", infoCard.image);

  return (
    <Link to={detailId}>
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
    </Link>
  );
};

export default DestCard;
