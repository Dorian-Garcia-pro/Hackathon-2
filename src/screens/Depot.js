import "../styles/Depot.css";
import { Carousel } from "react-responsive-carousel";
/* import "../styles/Home.css"; */
import Carrousel from "../components/Carrousel";
import DestCard from "../components/DestCard";
import egypt from "../assets/egypt.jpg";

const Depot = () => {
  const closePopup = () => {
    console.log("On verra plus tard");
  };
  return (
    <div>
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
                  <img src={egypt} />
                </div>
              </div>
              <div className="ChosenDest">
                <img className="imgChosenDest" src={egypt} />
              </div>
            </div>
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
        <p>10€/s HT</p>
      </div>
    </div>
  );
};

export default Depot;
