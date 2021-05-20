import React from 'react';
import {ContactStyled} from './Contact.styles';
import {useParams} from 'react-router-dom';

function Contact() {
	let {id} = useParams();

	return (
		<ContactStyled title="Contact">
			<h3>Contact, id: {id}</h3>
		</ContactStyled>
	);
}

export default Contact;
