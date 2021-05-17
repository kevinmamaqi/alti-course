import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import Collaborators from 'utils/data';
import Collapse from 'components/units/Collapse/Collapse';

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

			<h3>
				Como formar parte de
				<br />
				<b>Generaciòn no hunger</b>
			</h3>
			<Collapse title="titolo1" desc="lorem" />
			<Collapse title="titolo2" desc="lorem" />
			<Collapse title="titolo3" desc="lorem" />
		</Body>
	);
}

export default Home;
