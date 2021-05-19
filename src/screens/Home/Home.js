import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
// import Collaborators from 'utils/data';
import Collapse from 'components/units/Collapse/Collapse';
import Navigation from 'components/units/Navigation/Navigation';

// Styles
import {CollaboratosStyled} from './Home.styles';
import {NavigationStyled} from 'components/units/Navigation/Navigation.styles';
import {Collaborators, CountUpData} from 'utils/data';

// Styles
import {CollaboratosStyled, CountUpSection} from './Home.styles';
import CountUp from 'components/units/CountUp/CountUp';

function Home() {
	return (
		<Body title="HOME SCREEN">
			
			<NavigationStyled>
				<Navigation></Navigation>
			</NavigationStyled>

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
			<Collapse
				title="titolo1"
				desc=" Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
			/>
			<Collapse title="titolo2" desc="lorem" />
			<Collapse title="titolo3" desc="lorem" />
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
