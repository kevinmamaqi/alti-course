import React, {useState, useEffect} from 'react';

// Styles
import {CountUpStyled} from './CountUp.styles';

const initialTime = 0;
const animationTime = 2000;

function CountUp({number, name}) {
	const [displayNumber, setDisplayNumber] = useState(initialTime);

	useEffect(() => {
		let start;
		let counter = 0;
		function step(timestamp) {
			if (start === undefined) {
				start = timestamp;
			}
			const elapsed = timestamp - start;
			counter = counter + 1;
			setDisplayNumber(counter);

			if (elapsed < 2000) {
				// Stop the animation after 2 seconds
				window.requestAnimationFrame(step);
			} else {
				console.log(elapsed);
			}
		}

		window.requestAnimationFrame(step);
	}, []);

	return (
		<CountUpStyled>
			<span className="number">{displayNumber}</span>
			<span className="name">{name}</span>
		</CountUpStyled>
	);
}

export default CountUp;
