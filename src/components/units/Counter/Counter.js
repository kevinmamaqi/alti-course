import React, {useState, useEffect, useRef} from 'react';

// Styles
import {CounterStyled} from './Counter.styles';

function Counter({number, name, initialValue, animationTime}) {
	const [displayNumber, setDisplayNumber] = useState(initialValue);
	const [inViewport, setInViewport] = useState(false);
	const [countDone, setCountDone] = useState(false);
	const [scrollAdded, setScrollAdded] = useState(false);
	const refElement = useRef(null);

	function isInViewport() {
		if (!refElement.current) return false;
		const rect = refElement.current.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function handleScrollEvent() {
		console.log('scrolling');
		setInViewport(isInViewport());
	}

	useEffect(() => {
		let start;
		if (!scrollAdded) {
			setScrollAdded(true);
			document.addEventListener('scroll', handleScrollEvent);
		}
		if (!isInViewport() || countDone) return;
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
			setCountDone(true);
		}
		window.requestAnimationFrame(step);
		return () => {
			document.removeEventListener('scroll', handleScrollEvent);
		};
	}, [inViewport]);

	return (
		<CounterStyled ref={refElement}>
			<span className="number">{displayNumber}</span>
			<span className="name">{name}</span>
		</CounterStyled>
	);
}

export default Counter;
