import 'normalize.css';
import 'assets/css/global.css';
import Home from 'screens/Home/Home';
import Contact from 'screens/Contact/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact/:id" component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
