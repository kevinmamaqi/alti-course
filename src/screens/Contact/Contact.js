import React from 'react';
import Body from 'components/layout/Body/Body';
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
