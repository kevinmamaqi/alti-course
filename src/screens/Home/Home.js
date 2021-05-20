import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import {Collaborators, CounterData} from 'utils/data';

// Styles
import {CollaboratosStyled, CounterSection} from './Home.styles';
import Counter from 'components/units/Counter/Counter';
import {Col, Container, GenericContainer, Row} from 'theme/GlobalStyles';

function Home() {
	return (
		<Body title="Generación No Hunger">
			<Container backgroundUrl="https://accionsolidaria.info/wp-content/uploads/2019/04/003-1021x580.png"></Container>
			<Container>
				<h3>¿Qué es</h3>
				<h4>Generación No Hunger?</h4>
				<Row>
					<Col>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Col>
					<Col>
						<img src="" alt="¿Qué es GNH?" />
					</Col>
				</Row>
				<h3>Generación No Hunger en</h3>
				<h4>el Festival Pirineos Sur</h4>
				<Row>
					<Col>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</Col>
					<Col>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</Col>
				</Row>
			</Container>
			<GenericContainer backgroundUrl="https://accionsolidaria.info/wp-content/uploads/2019/04/003-1021x580.png"></GenericContainer>
			<Container>
				<Row>
					<Col>
						<h2>DISCIPLINAS</h2>
					</Col>
					<Col>
						<h2>EXPOSISIONES</h2>
					</Col>
				</Row>
			</Container>
			<GenericContainer backgroundUrl="https://accionsolidaria.info/wp-content/uploads/2019/04/003-1021x580.png">
				<Row>
					<Col></Col>
					<Col style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</Col>
				</Row>
			</GenericContainer>
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
				<h3>Los datos e impactos de</h3>
				<h4>Generación No Hunger</h4>
				<CounterSection>
					{CounterData.map((c, idx) => (
						<Counter
							key={`counter-${idx}`}
							number={c.number}
							name={c.name}
							initialValue={c.initialValue}
							animationTime={c.animationTime}
						/>
					))}
				</CounterSection>
			</Container>
		</Body>
	);
}

export default Home;
