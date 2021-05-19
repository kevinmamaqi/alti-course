import {React} from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import Banner from 'components/units/Banner/Banner';
import {Collaborators, CountUpData} from 'utils/data';

// Styles
import {CollaboratosStyled, CountUpSection} from './Home.styles';
import CountUp from 'components/units/CountUp/CountUp';
import {Container} from 'theme/GlobalStyles';

function Home() {
	return (
		<Body title="Generación No Hunger">
			<Banner img="assets/img/banner.png" />
			<Container>
				<h3>Colaboran con</h3>
				<h4>Generación No Hunger</h4>
				<CollaboratosStyled>
					{Collaborators.map((c, idx) => (
						<Collaborator
							key={`collaborator-${idx}`}
							image={c.img}
							title={c.name}
							url={c.web}
						/>
					))}
				</CollaboratosStyled>
			</Container>

			<Container>
				<h2>
					Los Datos e impactos de
					<br />
					<b>Generaciòn No Hunger</b>
				</h2>
				<CountUpSection>
					{CountUpData.map((c, idx) => (
						<CountUp
							key={`countup-${idx}`}
							number={c.number}
							name={c.name}
							initialValue={c.initialValue}
							animationTime={c.animationTime}
						/>
					))}
				</CountUpSection>
			</Container>
		</Body>
	);
}

export default Home;
