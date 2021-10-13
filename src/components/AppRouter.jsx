import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import { routes } from '../router';

const AppRouter = () => {
	return (
		<Switch>
			{routes.map(route => 
				<Route 
					component={route.component}
					path={route.path}
					exact={route.exact}
				/>
			)}
			<Redirect to='/posts'/>
		</Switch>
		);
};

export default AppRouter;