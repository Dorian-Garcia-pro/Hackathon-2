import { useState, useEffect } from 'react';
import axios from 'axios';

const Publicite = () => {
	const [pub, setPub] = useState([]);
	const [affichage, setAffichage] = useState([]);
	const [isOk, setIsOk] = useState(false);
	const [timer, setTimer] = useState(0);

	const firstPub = () => {
		if (pub.length > 0) {
			let newId = entierAleatoire(0, pub.length);
			setAffichage(pub[newId]);
			return true;
		}
		return false;
	};

	const entierAleatoire = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	useEffect(() => {
		axios
			.get(`http://localhost:3030/voyages/pubs`)
			.then((response) => response.data)
			.then((data) => setPub(data));
	}, []);

	useEffect(() => {
		let retour = firstPub();
		if (retour === true && affichage.type !== undefined) {
			//setIsOk(true);
		}
	}, [pub]);

	useEffect(() => {
		setIsOk(true);
	}, [affichage]);

	return <div className="pub">{isOk ? <img src={affichage.image} /> : ''}</div>;
};

export default Publicite;
