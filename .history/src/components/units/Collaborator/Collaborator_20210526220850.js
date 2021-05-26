import React from 'react';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {launchModal} from 'store/modal.slice';
// Styles
import {CollaboratorStyled} from './Collaborator.styles';

function Collaborator({image, title, username, email, website}) {
	const dispatch = useDispatch();
	const openModal = () => {
		dispatch(
			launchModal({
				headerContent: (<h2>{title}</h2>),
				bodyContent: (
					<ul>
						<li>{username}</li>
						<li>{email}</li>
					</ul>
				)
			})
		);
	};

	return (
		<CollaboratorStyled className="collaborator">
			<img src={image} alt={title} onClick={openModal}/>
			<h3>{title}</h3>
			<a href={website}>{website}</a>
		</CollaboratorStyled>
	);
}

export default Collaborator;
