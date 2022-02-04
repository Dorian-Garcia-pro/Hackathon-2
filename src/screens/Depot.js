import "../styles/Detail.css";
import { Carousel } from "react-responsive-carousel";
/* import "../styles/Home.css"; */
import Carrousel from "../components/Carrousel";
import DestCard from "../components/DestCard";
import { useEffect, useState } from "react";
import axios from "axios";
import egypt from "../assets/egypt.jpg";
import Formules from "../components/Formules";
import Bagages from "../components/Bagages";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import FastTrack from "../components/FastTrack";
import Assurances from "../components/Assurances";

const Depot = () => {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const closePopup = () => {
    console.log("On verra plus tard");
  };
  useEffect(() => {
    const id = params.id;
    axios
      .get(`http://localhost:3030/voyages/reservation/${id}`)
      .then((res) => res.data)
      .then((res) => setDetails(res));
  }, []);

  return (
    <div>
      {console.log(details)};
      <NavBar />
      <div className="topBanner">
        <h1>réservation</h1>
        <div className="avatarConnexion">Se connecter</div>
      </div>
      <div className="wrapperContent centrer">
        <div className="wrapperPubContent">
          <div className="pubPlaceholder pubLatGauche"></div>
          <div className="wrapperMainContent">
            <div className="rowResaTop">
              <div className="slideshowGauche">
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image)} alt="" />
                </div>
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image)} alt="" />
                </div>
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image)} alt="" />
                </div>
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image)} alt="" />
                </div>
                <div className="photoSlideShow">
                  <img src={details.map((el) => el.image)} alt="" />
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
            <Formules />
            <Bagages />
            <FastTrack />
            <Assurances />
          </div>
          <div className="pubPlaceholder pubLatDroite "></div>
        </div>
      </div>
      <div className="helpPopup">
        <div id="closeHelpPopup" onclick={closePopup}>
          X
        </div>
        <p>Besoin d'aide ?</p>
        <p>Appelez-nous au 01 02 03 04 05</p>
        <p>10€/s + prix d'un appel local</p>
      </div>
    </div>
  );
};

export default Depot;
