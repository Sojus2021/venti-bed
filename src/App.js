import './App.css';
import About from './Components/About/About';
import Beds from './Components/Beds/Beds.js';
import Search from './Components/Search/Search.js';
// import Place from './Components/Place/Place.js';
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
		
					<div id='mask-layer'>
				<p>
					Our VentiBed app displays hospital utilization data from U.S. states and territories.
				</p>
					{/* <ul>
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
					</ul> */}
					</div>
				
			</div>

			<div
				className='App'>
				<Route path='/' exact render={() => <Beds beds={beds} />} />
				<Route
					path='/staffed/:state'
					exact
					render={() => <Search beds={beds} />}
				/>
				<Route path='/About'>
					<About />
				</Route>
				{/* <Doughnut
					data={staffed.percent_of_inpatients_with_covid}
					options={{
						title: {
							display: true,
							text: 'COVID Patients Admitted To Hospital/All Patients Admitted',
							fontSize: 20,
						},
						legend: {
							display: true,
							position: 'right',
						},
					}}
				/> */}
			</div>
		</main>
	);
}

export default App;
