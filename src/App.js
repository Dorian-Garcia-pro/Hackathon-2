import { useEffect, useState } from 'react';
import Main from './screens/Main';
import Navbar from './screens/Navbar';
import './App.css';

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
					<Navbar setSelectPage={setSelectPage} />
					<main>
						<Main selectPage={selectPage} setIsConnected={setIsConnected} />
					</main>
				</div>
			) : (
				'What ?'
			)}
		</div>
	);
}

export default App;
