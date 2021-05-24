import React, {useState, useEffect, useRef} from 'react';

// Styles
import {CountUpStyled} from './CountUp.styles';

function CountUp({number, name, initialValue, animationTime}) {
	const [displayNumber, setDisplayNumber] = useState(initialValue);
	const [fireScroll, setFireScroll] = useState(false);

	useEffect(() => {
		function checkHeight() {
			console.log(window.scrollY);
			if (
				window.scrollY >
				document.getElementById('startEffect').offsetTop - window.innerHeight + 200
			) {
				console.log('Inside IF');
				setFireScroll(true);
			}
		}
		console.log('ADD EVENT LISTENER');
		window.addEventListener('scroll', checkHeight);
		return () => {
			window.removeEventListener('scroll', checkHeight);
		};
	});

	useEffect(() => {
		let start;

		if (fireScroll) {
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
		}
	}, [fireScroll]);

	return (
		<CountUpStyled id="startEffect">
			<span className="number">{displayNumber}</span>
			<span className="name">{name}</span>
		</CountUpStyled>
	);
}

export default CountUp;
