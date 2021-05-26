import React, {useState, useEffect} from 'react';

// Styles
import {CountUpStyled} from './CountUp.styles';

function CountUp({number, name, initialValue, animationTime}) {
	const [displayNumber, setDisplayNumber] = useState(initialValue);

	useEffect(() => {
		let start;

		function step(timestamp) {
			if (start === undefined) {
				start = timestamp;
			}
			const elapsed = timestamp - start;
			const iv = initialValue === 0 ? 0 : initialValue / number;
			const progress = iv + ((1 - iv) * (timestamp - start)) / animationTime;
			setDisplayNumber(parseInt(progress < 1 ? progress * number : number));

			if (elapsed < animationTime) {
				// Stop the animation after 2 seconds
				window.requestAnimationFrame(step); // 60hz 1000 / 60 = 16.6777ms
			} else {
				window.cancelAnimationFrame(step);
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
