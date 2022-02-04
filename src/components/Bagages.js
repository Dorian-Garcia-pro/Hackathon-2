import React from 'react';
import './Bagages.css';
import petitSac from '../assets/Petit_sac.webp';
import GrosSac from '../assets/Gros_sac.webp';

const Bagages = (props) => {
	const selectBagages = (choice) => {
		props.setBagages(choice);
	};

	return (
		<div className="bagagesWrapper">
			<h2 id="bagages">bagages</h2>
			<div className="bagagesWrapper">
				<div className="bagage">
					<div className="textFormuleBagage">
						<p className="gras">Priorité et 2 bagages en cabine</p>
						<p>✓ Embarquement prioritaire</p>
						<p>✓ 10 kg bag. en soute + 1 petit sac</p>
						<p className="gras">Un petit sac uniquement</p>
						<p>✓ 1 bagage de petite taille seulement</p>
						<p>✓ Doit pouvoir être placé sous le siège</p>
					</div>
					<div className="optionsBagages">
						<div className="FormuleBagage FormuleBagage1">
							<div className="imageFormule">
								{' '}
								<img src={petitSac} />
							</div>
							<div className="bottomFormule bottomFormule1">
								<div className="radioformule" onClick={() => selectBagages(0)}>
									<input type="radio" value="Male" name="gender" />
								</div>
								<div className="textBottomFormule">
									<p className="gras">1 bagage de petite taille seulement</p>
									<p className="petitGris">Inclus dans le tarif</p>
								</div>
							</div>
						</div>
						<div className="ouOUou">OU</div>
						<div className="FormuleBagage FormuleBagage2">
							<div className="imageFormule">
								<img src={GrosSac} />
							</div>
							<div
								className="bottomFormule bottomFormule2"
								onClick={() => selectBagages(1)}
							>
								<div className="radioformule">
									<input type="radio" value="Male" name="gender" />
								</div>

								<div className="textBottomFormule">
									<p className="gras">Ajouter pour 50,00 €</p>
									<p className="petitGris">Par voyage</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bagages;
