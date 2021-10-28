import React from 'react';
import {Doughnut} from 'react-chartjs-2';


function Place (props) {
    const hosp = {
        labels: ['COVID Inpatients', 'All Inpatients '],
        datasets: [
            {
                label: 'COVID Inpatients',
                backgroundColor: ['#B21F00', '#C9DE00'],
                hoverBackgroundColor: ['#501800', '#4B5000'],
                data: [
                    `${staffed.percent_of_inpatients_with_covid}, ${
                        1 - staffed.percent_of_inpatients_with_covid
                    }`,
                ],
            },
        ],
    };
    
    
    export default class App extends React.Component {
        render(){
            return (
                <div>
                    <Doughnut
                        data = {staffed.percent_of_inpatients_with_covid} 
                        options={{
                            title:{
                                display: true,
                                text:'COVID Patients Admitted To Hospital/All Patients Admitted',
                                fontSize:20
                            },
                            legend:{
                                display:true,
                                position: 'right'
                            }
                        }}
                    
                    
                    />
    
    
                </div>
            )
        }
    }


}
export default Place;