import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./screens/Detail";
import Home from "./screens/Home";
import Historique from "./screens/Historique";

import "./App.css";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/historique" element={<Historique />} />
            </Routes>
          </main>
        </div>
      ) : (
        "What ?"
      )}
    </div>
  );
}

export default App;
