//react components
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//custom screens
import Home from 'screens/Home/Home';
import Contact from 'screens/Contact/Contact';
import About from 'screens/About/About';
import Collaborators from 'screens/Collaborators/Collaborators';
import CreativeRecycling from 'screens/Exhibitions/CreativeRecycling/CreativeRecycling';
import Rap from 'screens/Exhibitions/Rap/Rap';
import Error404 from 'screens/Error404/Error404';
//styles
import 'normalize.css';
import 'assets/css/global.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact/:id" component={Contact} />
				<Route exact path="/about" component={About} />
				{/* <Route exact path="/disciplines-tent" component={DisciplinesTent} /> */}
				<Route exact path="/exhibitions/creative-recycling" component={CreativeRecycling} />
				<Route exact path="/exhibitions/rap" component={Rap} />
				{/* <Route exact path="/exhibitions/theater" component={Theater} />
				<Route exact path="/exhibitions/stories" component={Stories} />
				<Route exact path="/exhibitions/graffiti" component={Graffiti} /> */}
				<Route exact path="/collaborators" component={Collaborators} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
}

export default App;
