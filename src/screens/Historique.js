<<<<<<< HEAD
import "../styles/Historique.css";
import axios from "axios";
import { useState } from "react";

const Historique = () => {
  const [date, setDate] = useState("");
  const [cout, setCout] = useState(0);
  const [destination, setDestination] = useState("");

  const handleChangeDate = (e) => {
    let value = e.target.value;
    setDate(value);
  };

  const handleChangeCout = (e) => {
    let value = e.target.value;
    setCout(value);
  };

  const handleChangeDestination = (e) => {
    let value = e.target.value;
    setDestination(value);
  };

  const postReservation = () => {
    axios.post("http://localhost:3030/historiques/historique", {
      date: date,
      destination: destination,
      cout: cout,
    });
  };

  return (
    <div>
      <input placeholder="date" onChange={handleChangeDate}></input>
      <input placeholder="cout" onChange={handleChangeCout}></input>
      <input
        placeholder="destination"
        onChange={handleChangeDestination}
      ></input>
      <button onClick={postReservation}>Post reservation</button>
    </div>
  );
=======
import '../styles/Historique.css';
import axios from 'axios';
import { useState } from 'react';

const Historique = () => {
	const [date, setDate] = useState('');
	const [cout, setCout] = useState(0);
	const [destination, setDestination] = useState('');

	const handleChangeDate = (e) => {
		let value = e.target.value;
		setDate(value);
	};

	const handleChangeCout = (e) => {
		let value = e.target.value;
		setCout(value);
	};

	const handleChangeDestination = (e) => {
		let value = e.target.value;
		setDestination(value);
	};

	const postReservation = () => {
		axios.post('http://localhost:3030/historiques/historique', {
			date: date,
			destination: destination,
			cout: cout,
		});
	};

	return (
		<div>
			<input placeholder="date" onChange={handleChangeDate}></input>
			<input placeholder="cout" onChange={handleChangeCout}></input>
			<input
				placeholder="destination"
				onChange={handleChangeDestination}
			></input>
			<button onClick={postReservation}>Post reservation</button>
		</div>
	);
>>>>>>> dev
};

export default Historique;
