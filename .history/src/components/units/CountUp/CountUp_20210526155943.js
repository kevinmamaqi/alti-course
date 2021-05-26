import React, {useState, useEffect} from 'react';

import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// Styles
import {CountUpStyled} from './CountUp.styles';

/*
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

*/


const Counter = (props) => {

	var isVisible = "hidden";
	var inizio = 0;
	var  fine = 10000;

    function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }
    return (
        <div>
            <VisibilitySensor onChange={onChange}>
                <div>
                   <div><CountUp start={inizio} end={fine} duration={5} /></div>
				 
                   
                </div>
            </VisibilitySensor>
        </div>
    );
};



export default Counter;
