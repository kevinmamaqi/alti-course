import React from 'react';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {launchModal} from 'store/modal.slice';
// Styles
import {CollaboratorStyled} from './Collaborator.styles';

function Collaborator({image, title, url}) {
	const dispatch = useDispatch();
	const openModal = () => {
		dispatch(
			launchModal({
				headerContent: 'Hi guys',
				bodyContent: 'How are you?',
			})
		);
	};

	return (
		<CollaboratorStyled className="collaborator">
			<img src={image} alt={title} onClick={openModal}/>
			<h3>{title}</h3>
			<a href={url}>{url}</a>
		</CollaboratorStyled>
	);
}

export default Collaborator;
