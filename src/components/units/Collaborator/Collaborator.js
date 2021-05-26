import React from 'react';

// Styles
import {CollaboratorStyled} from './Collaborator.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Redux
import {useDispatch} from 'react-redux';
import {launchModal} from 'store/modal.slice';

function Collaborator({image, title, url, email, address, phone, company}) {
	const dispatch = useDispatch();
	return (
		<CollaboratorStyled className="collaborator">
			<img
				src={image}
				alt={title}
				onClick={() =>
					dispatch(
						launchModal({
							headerContent: title,
							bodyContent: (<ul>
								<li><FontAwesomeIcon icon="FaEnvelope"/> {email}</li>
								<li>Phone: {phone}</li>
								<li>Address: {address.city}</li>
								<li>Company: {company.name}</li>
							</ul>),
						})
					)
				}
			/>
			<h3>{title}</h3>
			<a href={url}>{url}</a>
		</CollaboratorStyled>
	);
}

export default Collaborator;
/*
"name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
	*/
