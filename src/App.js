import './App.css';
import About from './Components/About/About';
import Beds from './Components/Beds/Beds.js';
import Search from './Components/Search/Search.js';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, PrimaryButton } from './Components/Buttons';

function App() {
	const [beds, setBeds] = useState([]);

	const url = `https://healthdata.gov/resource/6xf2-c3ie.json`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setBeds(json);
			})
			.catch(console.error);
	}, []);
	return (
		<main>
			<nav>
				<PrimaryButton>
					<Link to='/'>Home</Link>
				</PrimaryButton>
				<Button>
					<Link to='/About'>About</Link>
				</Button>
			</nav>

			<div className='sheets'>
				<div>
					<p>Introducing VentiBed ...</p>
				</div>
			</div>

			<div className='App'>
				<Route path='/' exact render={() => <Beds beds={beds} />} />
				<Route
					path='/staffed/:state'
					exact
					render={() => <Search beds={beds} />}
				/>
				<Route path='/About'>
					<About />
				</Route>
			</div>
		</main>
	);
}

export default App;
