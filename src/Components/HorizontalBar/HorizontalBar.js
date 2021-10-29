       
import { render } from '@testing-library/react';
import { MDBContainer } from 'mdbreact';
import { HorizontalBar } from 'react-chartjs-2';

function HorizontalBar (props){
	state = {

		dataHorizontal: {
			labels: ['A', 'B', 'C'],
			datasets: [
				{
					label: 'occupied',
					data: [
						`${staffed.percent_of_inpatients_with_covid}`,
						`${staffed.adult_icu_bed_utilization}`,
						`${staffed.adult_icu_bed_covid_utilization}`,
					],
					fill: true,
					barPercentage: 1,
					backgroundColor: 'red',
					borderWidth: 1,
				},
			],
	
		}
	};
	render(){
		return (
		<MDBContainer>
		<HorizontalBar data={this.state.dataHorizontal}
		options={{responsive: true}}
		 />
		</MDBContainer>
	
		);
	};
};



export default HorizontalBar;
