import React from 'react';

// Styles
import {CollaboratorStyled} from './Collaborator.styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Redux
import {useDispatch} from 'react-redux';
import {launchModal} from 'store/modal.slice';
import {faBuilding, faCoffee, faEnvelope, faHome, faPhone} from '@fortawesome/free-solid-svg-icons';

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
							bodyContent: (
								<button
									onClick={() =>
										dispatch(
											launchModal({
												headerContent: title,
												bodyContent: (<ul>
													<li><FontAwesomeIcon icon={faEnvelope}/>{email}</li>
													<li><FontAwesomeIcon icon={faPhone}/>{phone}</li>
													<li><FontAwesomeIcon icon={faHome}/>{address.city}</li>
													<li><FontAwesomeIcon icon={faBuilding}/>{company.name}</li>
												</ul>),
											})
										)
									}>More Data</button>),
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
