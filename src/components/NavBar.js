import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="homeIcon">
        <i class="fas fa-home fa-2x"></i>
      </NavLink>
      <h1>C'EST QUAND QU'ON ARRIVE ?</h1>
      <NavLink to="/historique" className="homeIcon">
        <i class="fas fa-file fa-2x"></i>
      </NavLink>
    </div>
  );
};

export default NavBar;
{
  /* <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/historique" element={<Historique />} /> */
}
