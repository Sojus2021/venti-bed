import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Search.css';
// import { MDBContainer } from 'mdbreact';
// import { HorizontalBar } from 'react-chartjs-2';
// import Place from 'src/Components/Place/Place.js';

function Search(props) {
	const [staffed, setStaffed] = useState(null);
	const { state } = useParams();

	useEffect(() => {
		const url = `https://healthdata.gov/resource/6xf2-c3ie.json`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				let staffedBed = json.find((staffed) => staffed.state === state);
				setStaffed(staffedBed);
			})
			.catch(console.error);
	}, [state]);
	// let data = {
	// 	labels: ['A', 'B', 'C'],
	// 	datasets: [
	// 		{
	// 			label: 'occupied',
	// 			data: [
	// 				`${staffed.percent_of_inpatients_with_covid}`,
	// 				`${staffed.adult_icu_bed_utilization}`,
	// 				`${staffed.adult_icu_bed_covid_utilization}`,
	// 			],
	// 			fill: true,
			//  barPercentage: 1
	// 			backgroundColor: 'red',

	// 		},
	// 	],
	// };

	if (!staffed) {
		return <p>Loading state data...</p>;
	} else {
	}

	return (
		<div className='container2' id='individual' key={state}>
			<div className='card'>
				<ul>
					<div className='card-title'>
						<p>{staffed.state}</p>
					</div>

					<div className='list'>
						{/* <MDBContainer>
							<HorizontalBar data={data} />
						</MDBContainer> */}
						<li2>A: {staffed.percent_of_inpatients_with_covid}</li2>
						<p></p>
						<li3>B: {staffed.adult_icu_bed_utilization}</li3>
						<p></p>
						<li4>C: {staffed.adult_icu_bed_covid_utilization}</li4>
						<p></p>
						<li1>
							Hospitals Reporting Critical Staffing Shortages Today:
							{staffed.critical_staffing_shortage_today_yes}
						</li1>
						<p></p>

						<h6>LEGEND</h6>

						<ul>
							<li2>
								A: COVID Patients Admitted to Hospital/All Patients Admitted
								(e.g. 0.037 = 3.7%)
							</li2>
							<p></p>
							<li3>
								B: Occupied Adult ICU Beds/All Adult ICU Beds (e.g 0.582 =
								58.2%)
							</li3>
							<p></p>
							<li4>
								C: ICU Beds Occupied By Adult COVID Patients/All Occupied Adult
								ICU Beds (e.g. 0.196 = 19.6%)
							</li4>
							<p></p>
						</ul>
					</div>
				</ul>
			</div>
		</div>
	);
}
export default Search;
