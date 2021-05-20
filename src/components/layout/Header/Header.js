import Menu from 'components/units/Menu/Menu';
import React from 'react';
import {menuLinks} from '../../../utils/CONSTANTS';
import {Helmet} from 'react-helmet';

function Header({title}) {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
			</Helmet>
			<Menu entries={menuLinks} />
		</>
	);
}

export default Header;
