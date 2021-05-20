import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'theme/GlobalStyles';

// Styles
import {MenuStyled} from './Menu.styles';

function Menu({entries}) {
	return (
		<MenuStyled>
			<Container className="header-container">
				<h1>GeneraciónNoHunger</h1>
				<nav className="menu">
					<ul>
						{entries.map((m, idx) => (
							<li key={`link-${idx}`}>
								<Link to={m.link}>{m.title}</Link>
								{m.dropdown && m.dropdown.length > 0 ? (
									<ul>
										{m.dropdown.map((sm, idxChild) => (
											<li key={`linkChild-${idxChild}`}>
												<Link to={sm.link}>{sm.title}</Link>
											</li>
										))}
									</ul>
								) : null}
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</MenuStyled>
	);
}

export default Menu;
