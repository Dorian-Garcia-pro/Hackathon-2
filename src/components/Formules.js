import React from "react";
import "./Formules.css";

function Formules() {
  return (
    <div className="assurancesWrapper">
      <h2 id="tarifs">tarifs</h2>
      <div className="tarifsWrapper">
        <div className="formules">
          <div className="formule">
            <h2>Value</h2>
            <p>Voyager Leger</p>
            <div className="textFormule">
              <p>Non-remboursable</p>
              <p>Modification soumise à frais de gestion</p>
              <p>1 bagage de petite taille seulement</p>
              <p>Doit pouvoir être placé sous le siége</p>
              <p>(40cm x 20cm x 25cm)</p>
            </div>
            <div className="btnFormuleContinuer">Continuer pour 999$</div>
          </div>
          <div className="formule">
            <h2>Regular</h2>
            <p>Parfait pour les séjours brefs</p>
            <div className="textFormule">
              <p>Non-remboursable</p>
              <p>Modification soumise à frais de gestion</p>
              <p>Priorité et bagages en cabine</p>
              <p>
                Embarquez en premier, 1 bagage en cabine de 10kg et 1 petit sac
              </p>
              <p>Siége reservé</p>
              <p>Rangées spécifiques disponibles</p>
            </div>
            <div className="btnFormule">157,99$ de plus</div>
          </div>
          <div className="formule">
            <h2>Plus</h2>
            <p>Comprend un bagage en soute de 20kg</p>
            <div className="textFormule">
              <p>Non-remboursable</p>
              <p>Modification soumise à frais de gestion</p>
              <p>1 bagage de petite taille</p>
              <p>Doit pouvoir être placé sous le siége</p>
              <p>(40cm x 20cm x 25cm)</p>
              <p>Siége reservé</p>
              <p>Rangées spécifiques disponibles</p>
              <p>20kg bag. en soute</p>
              <p>Déposez votre bagage au comptoir d'enregistrement</p>
              <p>Enregristrement gratuit à l'aéroport</p>
              <p>Jusqu'a 40minutes avant votre vol</p>
            </div>
            <div className="btnFormule">299$ de plus</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formules;
