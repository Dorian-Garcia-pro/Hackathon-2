import React from 'react';
import './Assurances.css';
import assur from '../assets/assur.webp';

const Assurances = (props) => {
	const updateAssurances = (choice) => {
		props.setAssurance(1);
	};

	return (
		<div className="AssurWrapper">
			<h2 id="Assur">Assurance</h2>

			<div className="Assur">
				<div className="AssurDroite">
					<img src={assur} />
				</div>
				<div className="AssurGauche">
					<h2>La tranquillité d’esprit n’a pas de prix</h2>
					<p>
						Avec l’assurance voyage Cover Genius, oubliez tous vos soucis et
						profitez d’un voyage sûr et amusant.
					</p>

					<p>
						✓ Prise en charge le remboursement de votre voyage si vous
						contractez le Covid-19 avant votre départ.
					</p>
					<p>
						✓ Prise en charge de vos frais médicaux en cas d'accident ou maladie
						durant votre voyage, jusqu'à 1millions de dollar y compris le
						Covid-19
					</p>
					<p>
						✓ Si vous contractez le Covid-19 durant votre voyage et que votre
						état de santé nécessite un rapatriement sanitaire, AXA organise
						votre retour en France
					</p>
					<div className="AssurAjouter">
						<div className="AssurPrixParPers">
							<p className="petitGris">Par personne</p>
							<p className="gras">+ 25% sur le prix du billet</p>
						</div>
						<div
							className="AssurBtnAjouter"
							onClick={() => updateAssurances(1)}
						>
							Ajouter pour Tous
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Assurances;
