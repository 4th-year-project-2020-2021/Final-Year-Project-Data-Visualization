import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../ProgressComponent';
import { Line, Bar } from 'react-chartjs-2';
import styles from '../Chart/Chart.module.css';

const Chart = ({ data: {confirmed, deaths, recovered}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: 'rgba(82, 179, 217, 1)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'rgba(192, 57, 43, 1)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ recovered }) => recovered),
                            label: 'Recovered',
                            borderColor: 'rgba(35, 205, 167, 1)',
                            fill: true,
                        }],

                    }}
                />) : null
    );

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'No.People',
                            backgroundColor: ['rgba(82, 179, 217, 1)', 'rgba(35, 205, 167, 1)', 'rgba(192, 57, 43, 1)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart: lineChart}
        </div>
    )
}

export default Chart;