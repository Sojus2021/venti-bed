import './Beds.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

function Beds({ beds }) {
	const [search, setSearch] = useState('');
	const [filterBeds, setFilterBeds] = useState([]);
	
	useEffect(() => {
		if (beds.length) {
			setFilterBeds(
				beds
					.map((staffed) => {
						staffed.fullName = data[staffed.state];
						return staffed;
					})
					.filter((staffed) => {
						console.log(staffed);
						let lower = staffed.fullName.toLowerCase();
						let lowerSearch = search.toLowerCase();
						console.log(lower);
						return lower.indexOf(lowerSearch) !== -1;
					})
					.sort((firstEl, secondEl) => {
						if (firstEl.state < secondEl.state) {
							return -1;
						}
						if (firstEl.state > secondEl.state) {
							return 1;
						}
						return 0;
					})
			);
		}
	}, [beds, search]);

	if (!filterBeds) {
		return <p>Loading state data...</p>;
	} else
		return (
			<section className='container'>
				<input
					type='text'
					placeholder='type/click state name'
					onChange={(e) => setSearch(e.target.value)}
				/>

				{filterBeds.map((staffed) => (
					<Link to={`/staffed/${staffed.state}`} key={staffed.state}>
						<div>
							<p1>{staffed.fullName}</p1>
						</div>
					</Link>
				))}
			</section>
		);
}
export default Beds;
