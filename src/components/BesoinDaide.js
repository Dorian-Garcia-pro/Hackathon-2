import React from "react";
import { useEffect, useState } from "react";

function BesoinDaide() {
  const [popup, setPopup] = useState(true);

  const closePopup = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <div className={popup ? "helpPopup" : "helpPopupNone"}>
        <div id="closeHelpPopup" onClick={closePopup}>
          X
        </div>
        <p>Besoin d'aide ?</p>
        <p>Appelez-nous au 01 02 03 04 05</p>
        <p>10€/s + prix d'un appel local</p>
      </div>
    </div>
  );
}

export default BesoinDaide;
