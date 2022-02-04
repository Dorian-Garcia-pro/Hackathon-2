import React from 'react';
import './FastTrack.css';
import fastrack from '../assets/fastrack.webp';

const FastTrack = (props) => {
	const updateFastTrack = (choice) => {
		props.setFastTrack(choice);
	};

	return (
		<div className="FastTrackWrapper">
			<h2 id="FastTrack">Fast Track</h2>

			<div className="fastTrack">
				<div className="fastTrackGauche">
					<h2>
						Évitez l’attente aux contrôles de sécurité avec une file dédiée Fast
						Track
					</h2>
					<p className="fastTrackTextRouge">LE MEILLEUR MOMENT POUR RÉSERVER</p>
					<p>
						Évitez les longues files d’attente et passez les contrôles de
						sécurité rapidement.
					</p>
					<p>Les avantages de Fast Track</p>
					<p>
						✓ Passez rapidement les contrôles de sécurité à l’aéroport lorsqu’il
						y a beaucoup de monde
					</p>
					<p>✓ Arrivez rapidement et facilement à votre porte d’embarquement</p>
					<div className="fastTrackAjouter">
						<div className="fastTrackPrixParPers">
							<p className="petitGris">Par personne</p>
							<p className="gras">59,99€</p>
						</div>
						<div
							className="fastTrackBtnAjouter"
							onClick={() => updateFastTrack(1)}
						>
							Ajouter pour Tous
						</div>
					</div>
				</div>
				<div className="fastTrackDroite">
					<img src={fastrack} />
				</div>
			</div>
		</div>
	);
};

export default FastTrack;
