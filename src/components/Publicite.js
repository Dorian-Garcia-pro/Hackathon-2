import { useState, useEffect } from 'react';
import axios from 'axios';

const Publicite = () => {
	const [pub, setPub] = useState([]);
	const [affichage, setAffichage] = useState([]);
	const [isOk, setIsOk] = useState(false);
	const [timer, setTimer] = useState(0);

	const interval = setInterval(() => {
		setTimer(timer + 1);
	}, 5000);

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
		console.log(retour);
		if (retour === true && affichage.type !== undefined) {
			setIsOk(true);
		}
	}, [pub]);

	useEffect(() => {
		setIsOk(true);
	}, [affichage]);
	/*
	useEffect(() => {
		if (timer === 1) {
			/*setIsOk(false);
			let newId = entierAleatoire(1, pub.length);
			console.log(newId);
			setAffichage(pub[newId]);
			console.log(affichage.id);
			setTimer(0);
			setIsOk(true);
			
			if (affichage.id === pub.length - 1) {
				setAffichage(pub[0]);
			} else {
				let newId = affichage.id + 1;
				setAffichage(pub[newId]);
			}
			console.log(affichage.id);
		}
	}, [affichage]);
*/
	return <div className="pub">{isOk ? <img src={affichage.image} /> : ''}</div>;
};

export default Publicite;
