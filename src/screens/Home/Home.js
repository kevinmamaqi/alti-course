import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import {Collaborators, CounterData} from 'utils/data';

// Styles
import {CollaboratosStyled, CounterSection} from './Home.styles';
import Counter from 'components/units/Counter/Counter';

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
			<CounterSection>
				{CounterData.map((c) => (
					<Counter
						number={c.number}
						name={c.name}
						initialValue={c.initialValue}
						animationTime={c.animationTime}
					/>
				))}
			</CounterSection>
		</Body>
	);
}

export default Home;
