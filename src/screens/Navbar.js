import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setSelectPage, setIsConnected }) => {
  const [isDeroule, setIsDeroule] = useState(false);

  const disconnect = () => {
    localStorage.clear();
    setIsConnected(false);
    window.reload();
  };

  return (
    <div className="Navbar">
      <div className="container">
        <div className={isDeroule ? "navigation active" : "navigation"}>
          <ul>
            <li>
              <a onClick={() => setSelectPage(1)}>
                <span className="icon">
                  <i className="fas fa-home" />
                </span>
                <span className="text">Home</span>
              </a>
            </li>
            <li>
              <a onClick={() => setSelectPage(2)}>
                <span className="icon">
                  <i className="fas fa-warehouse" />
                </span>
                <span className="text">Dépôt</span>
              </a>
            </li>
            <li>
              <a onClick={() => setSelectPage(3)}>
                <span className="icon">
                  <i className="fas fa-bus" />
                </span>
                <span className="text">Hall des ventes</span>
              </a>
            </li>
            <li>
              <a onClick={() => setSelectPage(4)}>
                <span className="icon">
                  <i className="fas fa-bezier-curve" />
                </span>
                <span className="text">Exploitation</span>
              </a>
            </li>
            <li>
              <a onClick={() => setSelectPage(5)}>
                <span className="icon">
                  <i className="fas fa-coins" />
                </span>
                <span className="text">Finances</span>
              </a>
            </li>
            <li>
              <a onClick={() => disconnect()}>
                <span className="icon">
                  <i className="fas fa-window-close" />
                </span>
                <span className="text">Déconnexion</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={isDeroule ? "toggle active" : "toggle"}
          onClick={() => setIsDeroule(!isDeroule)}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
