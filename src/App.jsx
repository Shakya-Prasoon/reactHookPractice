import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Counter from './components/Counter';
import TablePage from './components/TablePage';
import Nav from './components/Nav';
// import NewEntry from './components/NewEntry';
import SpaceX from './components/SpaceX';
import Movie from './components/Movie';
import gif from './components/gif.gif'


function App() {

	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component ={ Home } />
					<Route path="/spacex" component ={ SpaceX } />
					<Route path="/tablePage" component ={ TablePage } />
					{/* <Route path="/newEntry" component ={ NewEntry } /> */}
					<Route path="/counter" component ={ Counter } />
					<Route path="/movie" component ={ Movie } />
				</Switch>
			</div>
		</Router>
	);
}
const Home = () => (
	<div className="home">
		<h1 > Welcome to the HomePage! </h1>
		<br />
		<p>Let's do something crazy</p>
		<br />
		<img src={gif} alt="gif" style={{borderRadius: 15, width: 600}}/>
	</div>
)
export default App;
