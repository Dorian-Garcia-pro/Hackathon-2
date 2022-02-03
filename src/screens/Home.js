import { Carousel } from "react-responsive-carousel";
import "../styles/Home.css";
import Carrousel from "../components/Carrousel";
import DestCard from "../components/DestCard";
import egypt from "../assets/egypt.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ avatar, setAvatar }) => {
  const [popup, setPopup] = useState(true);
  const closePopup = () => {
    setPopup(!popup);
  };
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/voyages/home")
      .then((res) => res.data)
      .then((res) => setDatas(res));
  }, []);

  return (
    <div>
      {console.log(datas)}
      <div className="topBanner">
        <h1>Les veilleurs de nudes</h1>
        <div className="avatarConnexion">Se connecter</div>
      </div>
      <div className="wrapperContent centrer">
        <div className="searchBar">
          <div className="searchSection searchOu ">searchOu</div>
          <div className="searchSection searchDate ">searchDate</div>
          <div className="searchSection searchAvecqui ">searchAvecqui</div>
          <div className="searchSection searchLoupe ">Loupe</div>
        </div>
        <div className="wrapperPubContent">
          <div className="pubPlaceholder pubLatGauche"></div>
          <div className="wrapperMainContent">
            <div className="rowCarouTop">
              <div className="Carou">
                <img className="imgCarou" src={egypt} />
              </div>
              <div className="TopDest">
                <h2>Top destinations</h2>
                {datas.slice(0, 5).map((el) => (
                  <>
                    <div className="topDestination">
                      <div className="topDestinationText">
                        <p>{el.name}</p>
                        <p>{el.prix}$</p>
                      </div>
                    </div>
                    <hr></hr>
                  </>
                ))}
                {/* <div className="topDestination">
                  <p>Voyage avec les Avengers</p>
                  <p>10 000 000€</p>
                </div>
                <hr></hr> */}
              </div>
            </div>

            <div className="galleryCard">
              {datas.map((el) => (
                <DestCard infoCard={el} />
              ))}
            </div>
          </div>
          <div className="pubPlaceholder pubLatDroite "></div>
        </div>
      </div>
      <div className={popup ? "helpPopup" : ""}>
        <div id="closeHelpPopup" onClick={closePopup}>
          X
        </div>
        <p>Besoin d'aide ?</p>
        <p>Appelez-nous au 01 02 03 04 05</p>
        <p>10€/s HT</p>
      </div>
    </div>
  );
};

export default Home;
