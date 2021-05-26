import 'normalize.css';
import 'assets/css/global.css';
import Home from 'screens/Home/Home';
import Contact from 'screens/Contact/Contact';
import Blog from 'screens/Blog/Blog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contacto" component={Contact} />
				<Route exact path="/blog" component={Blog} />
			</Switch>
		</Router>
	);
}
export default App;
