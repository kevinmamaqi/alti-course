import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import Collaborators from 'utils/data';

// Styles
import {CollaboratosStyled} from './Home.styles';

function Home() {
	return (
		<Body title="HOME SCREEN">
			<h3>Colaboran con</h3>
			<h4>Generación No Hunger</h4>
			<CollaboratosStyled>
				{Collaborators.map((c) => (
					<Collaborator image={c.img} title={c.name} url={c.web} />
				))}
			</CollaboratosStyled>
		</Body>
	);
}

export default Home;
