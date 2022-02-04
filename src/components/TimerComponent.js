import React from 'react';

function TimerComponent() {
	const [timer, setTimer] = React.useState(0);

	React.useEffect(() => {
		console.log('timer started!');
		const interval = setInterval(() => {
			console.log('timer is incrementing');
			setTimer((prevState) => prevState + 1);
		}, 1000);
	}, []);

	return <h1>{timer}</h1>;
}

export default TimerComponent;
