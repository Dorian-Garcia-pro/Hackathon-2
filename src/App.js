import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Detail from "./screens/Detail";
import Home from "./screens/Home";
import Historique from "./screens/Historique";
import Depot from "./screens/Depot";
import NavBar from "./components/NavBar";

import "./App.css";
import BesoinDaide from "./components/BesoinDaide";

function App() {
  const [selectPage, setSelectPage] = useState(1);
  const [isConnected, setIsConnected] = useState(true);

  /*
	useEffect(() => {
		if (localStorage.getItem('id_user') !== null) {
			setIsConnected(true);
		}
	}, []);
	*/

  useEffect(() => {}, [isConnected]);

  return (
    <div className="App">
      {isConnected ? (
        <div>
          {/*<Navbar setSelectPage={setSelectPage} />*/}
          <main>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<Depot />} />
              <Route path="/historique" element={<Historique />} />
            </Routes>
          </main>
        </div>
      ) : (
        "What ?"
      )}
      <BesoinDaide />
    </div>
  );
}

export default App;
