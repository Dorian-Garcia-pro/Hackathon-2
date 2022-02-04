import "../styles/Detail.css";
import { Carousel } from "react-responsive-carousel";
/* import "../styles/Home.css"; */
import Carrousel from "../components/Carrousel";
import DestCard from "../components/DestCard";
import { useEffect, useState } from "react";
import axios from "axios";
import egypt from "../assets/egypt.jpg";
import Formules from "../components/Formules";
import Publicite from "../components/Publicite";
import Bagages from "../components/Bagages";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import FastTrack from "../components/FastTrack";
import Assurances from "../components/Assurances";

const Depot = () => {
  const [details, setDetails] = useState([]);
  const [calculPrix, setCalulPrix] = useState(0);
  const [formules, setFormules] = useState(0);
  const [bagages, setBagages] = useState(0);
  const [fastTrack, setFastTrack] = useState(0);
  const [assurance, setAssurance] = useState(0);
  const [popup, setPopup] = useState(true);
  const params = useParams();

  let navigate = useNavigate();

  const closePopup = () => {
    setPopup(!popup);
  };

  const letsGo = () => {
    let d = new Date();
    let NoTimeDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    axios.post("http://localhost:3030/historiques/historique", {
      date: NoTimeDate,
      destination: details[0].destination,
      cout: calculPrix,
    });
    navigate("/historique");
  };

  useEffect(() => {
    axios
      .put(`http://localhost:3030/voyages/reservation`, { id: params.id })
      .then((res) => res.data)
      .then((res) => setDetails(res));
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      setCalulPrix(details[0].prix);
    }
  }, [details]);

  useEffect(() => {
    if (details.length > 0) {
      let newPrix = details[0].prix;
      if (formules === 1) {
        newPrix = newPrix * 1.02;
      } else if (formules === 2) {
        newPrix = newPrix * 1.05;
      } else {
        newPrix = details[0].prix;
      }
      if (bagages) {
        newPrix = newPrix * 1.1;
      }
      if (fastTrack) {
        newPrix = newPrix * 1.05;
      }
      if (assurance) {
        newPrix = newPrix * 1.25;
      }
      setCalulPrix(newPrix);
    }
  }, [formules, bagages, fastTrack, assurance]);

  return (
    <div>
      <div className="topBanner">
        <h1>réservation</h1>
        {/*    <div className="avatarConnexion">Se connecter</div> */}
      </div>
      <div className="wrapperContent centrer">
        <div className="wrapperPubContent">
          <div className="pubPlaceholder pubLatGauche">
            <Publicite />
          </div>
          <div className="wrapperMainContent">
            <div className="rowResaTop">
              <div className="slideshowGauche">
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image2)} alt="" />
                </div>
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image3)} alt="" />
                </div>
              </div>
              <div className="ChosenDest">
                <img
                  className="imgChosenDest"
                  src={details.map((el) => el.image)}
                  alt=""
                />
              </div>
            </div>
            <div className="rowBottomResa">
              <div className="rowBottomResaGauche">
                <div className="titreChosenDest">
                  {details.map((el) => el.name)}
                </div>
                <div className="descLightChosenDest">
                  <p>Notes:{details.map((el) => el.notes)}/5</p>
                  <p>
                    Nombre de Commandes:{details.map((el) => el.nbr_commande)}
                  </p>
                  <p>Date:{details.map((el) => el.evenement_date)}</p>
                  {details.map((el) => el.description)}
                </div>
              </div>
              <span className="vertical-line"></span>
              <div className="rowBottomResaDroite">
                <div className="prixParPers">
                  <p className="prixMinuscule">dés</p>
                  <p className="prixChosenDest">
                    {details.map((el) => el.prix)}$
                  </p>
                  <p className="prixMinuscule">par pers.</p>
                </div>
                <div className="btnVoirDispo">Voir les disponibiltés</div>
              </div>
            </div>
            <Formules formules={formules} setFormules={setFormules} />
            <Bagages bagages={bagages} setBagages={setBagages} />
            <FastTrack fastTrack={fastTrack} setFastTrack={setFastTrack} />
            <Assurances assurance={assurance} setAssurance={setAssurance} />
            <div className="prixtotal">
              <h3>Prix total : {calculPrix} $</h3>
              <div className="reservemoi" onClick={() => letsGo()}>
                Réserver ce voyage
              </div>
            </div>
          </div>
          <div className="pubPlaceholder pubLatDroite ">
            <Publicite />
          </div>
        </div>
      </div>
      {/*       <div className={popup ? "helpPopup" : "helpPopupNone"}>
        <div id="closeHelpPopup" onClick={closePopup}>
          X
        </div>
        <p>Besoin d'aide ?</p>
        <p>Appelez-nous au 01 02 03 04 05</p>
        <p>10€/s + prix d'un appel local</p>
      </div> */}
    </div>
  );
};

export default Depot;
