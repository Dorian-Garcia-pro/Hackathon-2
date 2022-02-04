import "../styles/Home.css";
import DestCard from "../components/DestCard";
import egypt from "../assets/egypt.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Publicite from "../components/Publicite";
import BesoinDaide from "../components/BesoinDaide";

const Home = ({ avatar, setAvatar }) => {
  const [popup, setPopup] = useState(true);
  const closePopup = () => {
    setPopup(!popup);
  };
  const [datas, setDatas] = useState([]);
  const [datasToFilter, setDatasToFilter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/voyages/home")
      .then((res) => res.data)
      .then((res) => setDatas(res));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3030/voyages/home")
      .then((res) => res.data)
      .then((res) => setDatasToFilter(res));
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchSelectTerm, setSearchSelectTerm] = useState("");
  const [searchActivite, setSearchActivite] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  const handleSearchSelect = (e) => {
    let value = e.target.value;
    setSearchSelectTerm(value);
  };

  const handleChangeActivite = (e) => {
    let value = e.target.value;
    setSearchActivite(value);
  };

  useEffect(() => {
    const resultFilter = datas.filter((val) =>
      val.destination.includes(searchSelectTerm)
    );
    setDatasToFilter(resultFilter);
  }, [searchSelectTerm]);

  useEffect(() => {
    const resultFilter = datas.filter((val) =>
      val.name.includes(searchActivite)
    );
    setDatasToFilter(resultFilter);
  }, [searchActivite]);

  return (
    <div>
      {console.log(searchActivite)};
      {/* {console.log("poulet", searchSelectTerm)} */}
      {/* <div className="topBanner">
        <h1>C'est quand qu'on arrive ?</h1>
        {/*     <div className="avatarConnexion">Se connecter</div> */}
      {/* </div> */}
      <div className="wrapperContent centrer">
        <div className="searchBar">
          <div className="searchSection searchOu ">
            <select
              className="searchSectionInput"
              onChange={handleChangeActivite}
            >
              <option
                value=""
                selected
                disabled
                hidden
                className="inputPlaceholder"
              >
                Activité
              </option>
              {datas.map((el) => (
                <option value={el.name}>{el.name}</option>
              ))}
            </select>
          </div>
          <div className="searchSection searchDate ">
            <select
              className="searchSectionInput"
              onChange={handleSearchSelect}
            >
              <option
                value=""
                selected
                disabled
                hidden
                className="inputPlaceholder"
              >
                Destination
              </option>
              {datas.slice(0, 12).map((el) => (
                <option value={el.destination}>{el.destination}</option>
              ))}
            </select>
          </div>
          <div className="searchSection searchAvecqui ">
            <input
              placeholder="Recherche"
              className="searchSectionInput inputPlaceholder"
              onChange={handleSearch}
            ></input>
          </div>
          <div
            className="searchSection searchLoupe"
            onClick={() => setDatasToFilter(datas)}
          >
            <i class="fas fa-undo"></i>
          </div>
        </div>
        <div className="wrapperPubContent">
          <div className="pubPlaceholder pubLatGauche">
            <Publicite />
          </div>
          <div className="wrapperMainContent">
            <div className="rowCarouTop">
              <div className="Carou">
                <img className="imgCarou" src={egypt} alt="" />
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
              </div>
            </div>

            <div className="galleryCard">
              {datasToFilter.map((val) => (
                <DestCard infoCard={val} />
              ))}
            </div>
          </div>
          <div className="pubPlaceholder pubLatDroite ">
            <Publicite />
          </div>
        </div>
      </div>
      {/*       <BesoinDaide />
      <div className={popup ? "helpPopup" : "helpPopupNone"}>
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

export default Home;
