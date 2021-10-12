import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Error';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/posts'>
					<Posts />
				</Route>
				<Route path='/error'>
					<Error />
				</Route>
				<Redirect to='/error'/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;