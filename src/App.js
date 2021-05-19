import 'normalize.css';
import 'assets/css/global.css';
import Home from 'screens/Home/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
		      <Route exact path="*" component={Home}/>
        </Switch>
    </Router>
  );
}
export default App;
