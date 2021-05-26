import React, {useEffect} from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import Collapse from 'components/units/Collapse/Collapse';
import {Collaborators, CountUpData} from 'utils/data';
import CounterComponent from 'components/composed/CounterComponent/CounterComponent';

// Styles
import {CollaboratosStyled, CountUpSection} from './Home.styles';
import CountUp from 'components/units/CountUp/CountUp';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {fetchArticles} from 'store/blog.slice';
import {launchModal} from 'store/modal.slice';
import {fetchUsers} from 'store/collaborator.slice';

function Home() {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.blog.articles);
	const blogStatus = useSelector((state) => state.blog.status);
	const users = useSelector((state) => state.collaborator.users);

	useEffect(() => {
		if (blogStatus !== 'SUCCESS' && blogStatus !== 'PENDING') {
			dispatch(fetchArticles());
			dispatch(fetchUsers());
		}
	}, [blogStatus]);

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
			{/* <CounterComponent /> */}
			<div className="modalButton" style={{paddingTop: 40, paddingBottom: 100}}>
				<button onClick={openModal}>Open Modal</button>
				<button onClick={openOtherModal}>Open Other modal</button>
			</div>
			<h3>Colaboran con</h3>
			<h4>Generación No Hunger</h4>
			<CollaboratosStyled>
				{users.map((el) => (
					<Collaborator
						key={el.id}
						image={el.img}
						title={el.name}
						username={el.username}
						email={el.email}
						website={el.website}						
					/>
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
		</Body>
	);
}

export default Home;
