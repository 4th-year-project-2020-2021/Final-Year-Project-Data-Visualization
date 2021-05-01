import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../ProgressComponent';
import { Line, Bar } from 'react-chartjs-2';
import styles from '../Chart/Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    });

    const lineChart = (
        dailyData.length
        ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed), 
                    label: 'Infected',
                    borderColor: '#000000',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths), 
                    label: 'Infected',
                    backgroundColor: '#000000',
                    fill: true,
                }],

            }}
        />) : null
    );
    return (
        <div>
            {lineChart}
        </div>
    )
}

export default Chart;