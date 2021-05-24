import React from 'react';
import Body from 'components/layout/Body/Body';
import {useParams} from 'react-router-dom';

// Redux
import {useSelector} from 'react-redux';

function Contact() {
	const counterValue = useSelector((state) => state.counter.value);

	return (
		<Body title="CL TACT">
			<h3>Counter value: {counterValue}</h3>
		</Body>
	);
}

export default Contact;
