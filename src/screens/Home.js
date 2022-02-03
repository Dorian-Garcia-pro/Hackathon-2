import { Carousel } from 'react-responsive-carousel';
import Publicite from '../components/Publicite';
import '../styles/Home.css';
import Carrousel from '../components/Carrousel';
import DestCard from '../components/DestCard';
import egypt from '../assets/egypt.jpg';

const Home = ({ avatar, setAvatar }) => {
	const closePopup = () => {
		console.log('On verra plus tard');
	};

	return (
		<div>
			<div className="topBanner">
				<h1>Les veilleurs de nudes</h1>
				<div className="avatarConnexion">Se connecter</div>
			</div>
			<div className="wrapperContent centrer">
				<div className="searchBar">
					<div className="searchSection searchOu ">searchOu</div>
					<div className="searchSection searchDate ">searchDate</div>
					<div className="searchSection searchAvecqui ">searchAvecqui</div>
					<div className="searchSection searchLoupe ">Loupe</div>
				</div>
				<div className="wrapperPubContent">
					<div className="pubPlaceholder pubLatGauche">
						<Publicite />
					</div>
					<div className="wrapperMainContent">
						<div className="rowCarouTop">
							<div className="Carou">
								<img className="imgCarou" src={egypt} />
							</div>
							<div className="TopDest">
								<h2>Top destinations</h2>
								<div className="topDestination">
									<p>Destination 1</p>
									<p>99€</p>
								</div>
								<hr></hr>
								<div className="topDestination">
									<p>Destination 2</p>
									<p>99€</p>
								</div>
								<hr></hr>
								<div className="topDestination">
									<p>Destination 3</p>
									<p>99€</p>
								</div>
								<hr></hr>
								<div className="topDestination">
									<p>Destination 4</p>
									<p>99€</p>
								</div>
								<hr></hr>
								<div className="topDestination">
									<p>Destination 5</p>
									<p>99€</p>
								</div>
							</div>
						</div>

						<div className="galleryCard">
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
							<DestCard />
						</div>
					</div>
					<div className="pubPlaceholder pubLatDroite ">
						<Publicite />
					</div>
				</div>
			</div>
			<div className="helpPopup">
				<div id="closeHelpPopup" onclick={closePopup}>
					X
				</div>
				<p>Besoin d'aide ?</p>
				<p>Appelez-nous au 01 02 03 04 05</p>
				<p>10€/s HT</p>
			</div>
		</div>
	);
};

export default Home;
