import React from 'react';
import './Formules.css';

const Formules = (props) => {
	const changeFormule = (choice) => {
		switch (choice) {
			case 0:
				props.setFormules(0);
				break;
			case 1:
				props.setFormules(1);
				break;
			case 2:
				props.setFormules(2);
				break;
			default:
				console.log('Gros problème, on va pas se mentir');
		}
	};

	return (
		<div className="assurancesWrapper">
			<h2 id="tarifs">tarifs</h2>
			<div className="tarifsWrapper">
				<div className="formules">
					<div className="formule">
						<h2>Value</h2>
						<p>Voyager Leger</p>
						<div className="textFormule">
							<p>Non-remboursable</p>
							<p>Modification soumise à frais de gestion</p>
							<p>1 bagage de petite taille seulement</p>
							<p>Doit pouvoir être placé sous le siége</p>
							<p>(40cm x 20cm x 25cm)</p>
						</div>
						<div
							className="btnFormuleContinuer"
							onClick={() => changeFormule(0)}
						>
							Ne pas prendre l'option
						</div>
					</div>
					<div className="formule">
						<h2>Regular</h2>
						<p>Parfait pour les séjours brefs</p>
						<div className="textFormule">
							<p>Non-remboursable</p>
							<p>Modification soumise à frais de gestion</p>
							<p>Priorité et bagages en cabine</p>
							<p>
								Embarquez en premier, 1 bagage en cabine de 10kg et 1 petit sac
							</p>
							<p>Siége reservé</p>
							<p>Rangées spécifiques disponibles</p>
						</div>
						<div className="btnFormule" onClick={() => changeFormule(1)}>
							+ 2% sur le prix du billet
						</div>
					</div>
					<div className="formule">
						<h2>Plus</h2>
						<p>Comprend un bagage en soute de 20kg</p>
						<div className="textFormule">
							<p>Non-remboursable</p>
							<p>Modification soumise à frais de gestion</p>
							<p>1 bagage de petite taille</p>
							<p>Doit pouvoir être placé sous le siége</p>
							<p>(40cm x 20cm x 25cm)</p>
							<p>Siége reservé</p>
							<p>Rangées spécifiques disponibles</p>
							<p>20kg bag. en soute</p>
							<p>Déposez votre bagage au comptoir d'enregistrement</p>
							<p>Enregristrement gratuit à l'aéroport</p>
							<p>Jusqu'a 40minutes avant votre vol</p>
						</div>
						<div className="btnFormule" onClick={() => changeFormule(2)}>
							+ 5% sur le prix du billet
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Formules;
