import React from 'react';

// Styles
import {CollaboratorStyled} from './Collaborator.styles';

function Collaborator({image, title, url}) {
	return (
		<CollaboratorStyled className="collaborator">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<a href={url}>{url}</a>
		</CollaboratorStyled>
	);
}

export default Collaborator;
