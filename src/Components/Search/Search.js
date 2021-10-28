import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Search.css';
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
						<li1>Metric 1: {staffed.critical_staffing_shortage_today_yes}</li1>
						<p></p>
						<li2>Metric 2: {staffed.percent_of_inpatients_with_covid}</li2>
						<p></p>
						<li3>Metric 3: {staffed.adult_icu_bed_utilization}</li3>
						<p></p>
						<li4>Metric 4: {staffed.adult_icu_bed_covid_utilization}</li4>
						
						
						
						{/* labels: ['COVID Inpatients', 'All Inpatients '],
						datasets: [
						{
							label: 'COVID Inpatients',
							backgroundColor: ['#B21F00', 								'#C9DE00'],
							hoverBackgroundColor: ['#501800', 							'#4B5000'],
							data: [
									`${staffed.											percent_of_inpatients_with_covid}, 							${1 - staffed.percent_of_inpatients_with_covid
										}`,
									],
						}
						]
						
						
						<Doughnut
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
				</ul>
			</div>
		</div>
	);
}
export default Search;
