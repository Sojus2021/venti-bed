import './App.css';
import About from './Components/About/About';
import Beds from './Components/Beds/Beds.js';
import Search from './Components/Search/Search.js';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, PrimaryButton } from './Components/Buttons';

let data = {
	AL: 'Alabama',
	AK: 'Alaska',
	AZ: 'Arizona',
	AR: 'Arkansas',
	AS: 'American Samoa',
	CA: 'California',
	CO: 'Colorado',
	CT: 'Connecticut',
	DC: 'District of Columbia',
	DE: 'Delaware',
	FL: 'Florida',
	GA: 'Georgia',
	HI: 'Hawaii',
	ID: 'Idaho',
	IL: 'Illinois',
	IN: 'Indiana',
	IA: 'Iowa',
	KS: 'Kansas',
	KY: 'Kentucky',
	LA: 'Louisiana',
	ME: 'Maine',
	MD: 'Maryland',
	MA: 'Massachusetts',
	MI: 'Michigan',
	MN: 'Minnesota',
	MS: 'Mississippi',
	MO: 'Missouri',
	MT: 'Montana',
	NE: 'Nebraska',
	NV: 'Nevada',
	NH: 'New Hampshire',
	NJ: 'New Jersey',
	NM: 'New Mexico',
	NY: 'New York',
	NC: 'North Carolina',
	ND: 'North Dakota',
	OH: 'Ohio',
	OK: 'Oklahoma',
	OR: 'Oregon',
	PA: 'Pennsylvania',
	PR: 'Puerto Rico',
	RI: 'Rhode Island',
	SC: 'South Carolina',
	SD: 'South Dakota',
	TN: 'Tennessee',
	TX: 'Texas',
	UT: 'Utah',
	VT: 'Vermont',
	VA: 'Virginia',
	VI: 'Virgin Islands',
	WA: 'Washington',
	WV: 'West Virginia',
	WI: 'Wisconsin',
	WY: 'Wyoming',
};

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
		if (beds.length) {
			setBeds(
				beds.map((staffed) => {
					staffed.fullName = data[staffed.state];
					return staffed;
				})
			);
		}
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

			{/* <div id='sheets'>
				<div>
					<p>Introducing VentiBed ...</p>
				</div>
			</div> */}

			<div className='App'>
				<Route
					path='/staffed/:state'
					exact
					render={() => <Search beds={beds} />}
				/>
				<Route path='/' exact render={() => <Beds beds={beds} />} />
				<Route path='/About'>
					<About />
				</Route>
			</div>
		</main>
	);
}

export default App;
