import React from 'react';
import { Line } from 'react-chartjs-2';

const ProgressGraph = (props) => {
    return (
        <div style={{
            width: '900px',
            height: '900px',
            margin: '40px auto'

        }}>
            <br></br>
            <Line data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Cases',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75, 195, 195, 0.4)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75, 192, 192, 1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: props.yAxis
                    }
                ]
            }} />
        </div>
    );
}

export default ProgressGraph;