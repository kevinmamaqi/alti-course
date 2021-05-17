import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import {Collaborators, CountUpData} from 'utils/data';

// Styles
import {CollaboratosStyled, CountUpSection} from './Home.styles';
import CountUp from 'components/units/CountUp/CountUp';

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
			<CountUpSection>
				{CountUpData.map((c) => (
					<CountUp
						number={c.number}
						name={c.name}
						initialValue={c.initialValue}
						animationTime={c.animationTime}
					/>
				))}
			</CountUpSection>
		</Body>
	);
}

export default Home;
