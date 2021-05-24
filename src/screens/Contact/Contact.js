import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
// import Collaborators from 'utils/data';
import Collapse from 'components/units/Collapse/Collapse';
import {Collaborators, CountUpData} from 'utils/data';

// Styles
import {CollaboratosStyled, CountUpSection} from './Contact.styles';
import CountUp from 'components/units/CountUp/CountUp';
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
