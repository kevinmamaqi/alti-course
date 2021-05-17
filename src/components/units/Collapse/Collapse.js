import React, {useState, useEffect, useRef} from 'react';
import {CollapseStyled} from './Collapse.style';

function Collapse({title, desc}) {
	const [isActive, setIsActive] = useState(false);
	const [customPHeight, setCustomPHeight] = useState(0);
	const [counter, setCounter] = useState(0);
	const pHeight = useRef(null);

	useEffect(() => {
		if (pHeight !== null) {
			setCustomPHeight(pHeight.current.scrollHeight);
		}
		function resizeHeight() {
			setCounter(counter + 1);
			console.log(pHeight.current.scrollHeight);
			setCustomPHeight(pHeight.current.scrollHeight);
		}
		window.addEventListener('resize', resizeHeight);

		return () => {
			window.removeEventListener('resize', resizeHeight);
		};
	}, []);

	console.log(counter);

	return (
		<CollapseStyled
			pHeight={customPHeight}
			onClick={() => setIsActive(!isActive)}
			className={isActive ? 'active' : ''}
		>
			<h4>{title}</h4>
			<p ref={pHeight}>{desc}</p>
		</CollapseStyled>
	);
}

export default Collapse;
