import React from "react";
import "./DestCard.css";
import rome from "../assets/rome.jpg";

function DestCard() {
  return (
    <div>
      <div className="containerCardDest">
        <div className="topCardDest">
          <img src={rome} />
        </div>
        <div className="bottomCardDest">
          <div className="nomDest">
            <p className="nomDestP">Rome</p>
            <p className="descDestP">
              Sit sit occaecat aliquip amet quis tempor consectetur tempor. Sit
              sit occaecat amet quis.
            </p>
          </div>
          <div className="prixDest">
            <p>999€</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestCard;
