import Button from 'components/units/Button/Button';
import React, {useState} from 'react';
import {faUser, faSpinner} from '@fortawesome/free-solid-svg-icons';
import Body from 'components/layout/Body/Body';

function Home() {
	const [loading, setLoading] = useState(false);

	const handleLogin = (params) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

	return (
		<Body title="HOME SCREEN" isLoading={loading}>
			<p>Welcome back, to login, please click on the button.</p>
			<Button
				text="Login"
				loadingText="Login in..."
				icon={faUser}
				iconPosition="left"
				isLoading={loading}
				iconLoading={faSpinner}
				showSpinner={false}
				onClick={handleLogin}
			/>
		</Body>
	);
}

export default Home;
