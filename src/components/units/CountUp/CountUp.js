import React, {useState, useEffect, useRef} from 'react';

// Styles
import {CountUpStyled} from './CountUp.styles';

const IObsOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0,
};

function CountUp({number, name, initialValue, animationTime}) {
	const [displayNumber, setDisplayNumber] = useState(initialValue);
	const myCounterRef = useRef(null);
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

		let observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				window.requestAnimationFrame(step);
			}
		}, IObsOptions);
		observer.observe(myCounterRef.current);

		return () => observer.unobserve(myCounterRef.current);
	}, []);

	return (
		<CountUpStyled ref={myCounterRef}>
			<span className="number">{displayNumber}</span>
			<span className="name">{name}</span>
		</CountUpStyled>
	);
}

export default CountUp;
