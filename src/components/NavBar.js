import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="./detail/id">Detail</NavLink>
      <NavLink to="./historique">Histo</NavLink>
    </div>
  );
};

export default NavBar;
{
  /* <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/historique" element={<Historique />} /> */
}
