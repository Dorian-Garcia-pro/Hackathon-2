import { useState, useEffect } from 'react';
import axios from 'axios';

const Publicite = () => {
	const [pub, setPub] = useState([]);
	const [affichage, setAffichage] = useState({});
	const [isOk, setIsOk] = useState(false);
	const [choice, setChoise] = useState(0);

	const firstPub = () => {
		if (pub.length > 0) {
			setAffichage(pub[entierAleatoire(0, pub.length - 1)]);
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
		const letsGo = () => {
			let retour = firstPub();
			if (retour === true && typeof affichage !== undefined) {
				setIsOk(true);
			}
		};
		letsGo();
	}, [pub]);

	useEffect(() => {
		if (typeof affichage !== undefined) {
			setIsOk(true);
		}
	}, [affichage]);

	return <div className="pub">{isOk ? <img src={affichage.image} /> : ''}</div>;
};

export default Publicite;
