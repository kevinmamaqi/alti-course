import 'normalize.css';
import 'assets/css/global.css';
import Button from 'components/units/Button/Button';
import React, {useState} from 'react';

// LOADING FALSE-INITIAL
// LOADING TRUE - 5seconds
// LOADING FALSE-SUCCESS
// LOADING FALSE-FAILURE

function App() {
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	};

	return (
		<div className="App">
			<p>Welcome back, to login, please click on the button.</p>
			<Button
				text="Login"
				loadingText="Login in..."
				isLoading={loading}
				onClick={handleLogin}
			/>
		</div>
	);
}

export default App;
