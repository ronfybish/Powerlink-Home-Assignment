import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Teams from './pages/Teams';
import Team from './pages/Team';
import NotFound from './pages/NotFound';

function App() {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/teams' component={Teams} />
					<Route exact path='/teams/:id' component={Team} />
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
