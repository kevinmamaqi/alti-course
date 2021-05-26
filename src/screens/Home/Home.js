import React, {useEffect} from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import {Collaborators, CountUpData} from 'utils/data';
// Styles
import {CollaboratosStyled, CountUpSection} from './Home.styles';
import CountUp from 'components/units/CountUp/CountUp';
import {Container} from 'theme/GlobalStyles';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {fetchArticles} from 'store/blog.slice';
import {launchModal} from 'store/modal.slice';
import {fetchUsers} from 'store/collaborators.slice';

import Person from 'assets/img/person.png';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

function Home() {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.blog.articles);
	const blogStatus = useSelector((state) => state.blog.status);
	const collaborators = useSelector((state) => state.collaborators.users);
	const collaboratorsStatus = useSelector((state) => state.collaborators.status);
	useEffect(() => {
		if (blogStatus !== 'SUCCESS' && blogStatus !== 'PENDING') {
			dispatch(fetchArticles());
		}
	}, [blogStatus]);

	useEffect(() => {
		if (collaboratorsStatus !== 'SUCCESS' && collaboratorsStatus !== 'PENDING') {
			dispatch(fetchUsers());
		}
	}, [collaboratorsStatus]);

	const openModal = () => {
		dispatch(
			launchModal({
				headerContent: 'Hi guys',
				bodyContent: 'How are you?',
			})
		);
	};

	const openOtherModal = () => {
		dispatch(
			launchModal({
				headerContent: 'Bye guys',
				bodyContent: "I'm going to code.",
			})
		);
	};

	return (
		<Body title="Generación No Hunger">
			<Container>
				<h3>Colaboran con</h3>
				<h4>Generación No Hunger</h4>
				<CollaboratosStyled>
					{blogStatus === 'SUCCESS' ? (
						collaborators
							.slice(0, 6)
							.map((c, idx) => (
								<Collaborator
									key={`collaborator-${idx}`}
									image={c.img ? c.img : Person}
									title={c.name}
									url={c.website}
									email={c.email}
									address={c.address}
									phone={c.phone}
									company={c.company}
								/>
							))
					) : (
						<p>No Collaborators</p>
					)}
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
				<div className="blog" style={{marginTop: '10rem', marginBottom: '10rem'}}>
					<h3>Last articles</h3>
					{blogStatus === 'SUCCESS' ? (
						articles.slice(0, 5).map((el) => (
							<div key={el.id}>
								<h3>{el.title}</h3>
							</div>
						))
					) : (
						<p>There are no articles yet.</p>
					)}
				</div>
			</Container>
		</Body>
	);
}

export default Home;
