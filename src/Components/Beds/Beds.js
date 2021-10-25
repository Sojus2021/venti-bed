import './Beds.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Beds({ beds }) {
	const [search, setSearch] = useState('');
	const [filterBeds, setFilterBeds] = useState([]);
	useEffect(() => {
		if (beds.length) {
			setFilterBeds(
				beds
					.filter((staffed) => {
						console.log(staffed);
						let lower = staffed.state.toLowerCase();
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
	}
	return (
		<section className='container'>
			<input
				type='text'
				placeholder='type/click state abbreviation'
				onChange={(e) => setSearch(e.target.value)}
			/>

			{filterBeds.map((staffed) => (
				<Link to={`/staffed/${staffed.state}`} key={staffed.state}>
					<div>
						<p>{staffed.state}</p>
					</div>
				</Link>
			))}
		</section>
	);
}

export default Beds;
