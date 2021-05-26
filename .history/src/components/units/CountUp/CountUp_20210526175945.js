import React, {useState, useEffect} from 'react';

//import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// Styles
import {CountUpStyled} from './CountUp.styles';


function CountUp({number, name, initialValue, animationTime}) {
	const [displayNumber, setDisplayNumber] = useState(initialValue);

	var isVisible = "hidden";
	const [viewPortEntered, setViewPortEntered] = useState(false);

	function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
		if (isVisible) {
			setViewPortEntered(true);
		}		
    }
	console.log(viewPortEntered);

	

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

	<VisibilitySensor onChange={onChange}>

		<CountUpStyled>
			<span className="number">{displayNumber}</span>
			<span className="name">{name}</span>
		</CountUpStyled>

	</VisibilitySensor>
	);
}



/*
function Counter () {

	var isVisible = "hidden";
	const [viewPortEntered, setViewPortEntered] = useState(false);


    function onChange(isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
		if (isVisible) {
			setViewPortEntered(true);
		}
		console.log(viewPortEntered);
    }
    return (
        <div>
            <VisibilitySensor onChange={onChange}>
                <div>
                   <CountUp start={viewPortEntered ? 0 : null} end={100} duration={5} />            
                </div>
            </VisibilitySensor>
        </div>
    );
};

*/

export default CountUp;
