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
function Contact() {
	let {id} = useParams();

	return (
		<Body title="HOME SCREEN">
			<h3>Contact, id: {id}</h3>
		</Body>
	);
}

export default Contact;
