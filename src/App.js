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

			<div>
				<p>
					Our VentiBed app displays data from U.S. states and territories in the
					following categories:
					<ul>
						<li1>
							Metric 1: Hospitals Reporting Critical Staffing Shortages Today;
						</li1>
						<p></p>
						<li2>
							Metric 2: COVID Patients Admitted to Hospital/All Patients
							Admitted (e.g. 0.037 = 3.7%);
						</li2>
						<p></p>
						<li3>
							Metric 3: Occupied Adult ICU Beds/All Adult ICU Beds (e.g 0.582 =
							58.2%);
						</li3>
						<p></p>
						<li4>
							Metric 4: ICU Beds Occupied By Adult COVID Patients/All Occupied
							Adult ICU Beds (e.g. 0.196 = 19.6%)
						</li4>
					</ul>
				</p>
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
