import React, { useEffect, useState } from 'react'
import "../css/styling.css";
import ProgressGraph from "../CovidComponents/ProgressGraph";
import axios from 'axios';
import { axisLeft } from 'd3-axis';

function Stats() {
    const [covidProgress, setCovidProgress] = useState({});
    const [days, setDays] = useState({});
    const [country, setCountry] = useState('');
    const [coronaCountArray, setCoronaCountArray] = useState([]);

    useEffect(() => {

        // Calling api
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                if (res.status === 200) {
                    setCovidProgress(res.data);
                }
            })
            // Error handling
            .catch(error => {
                console.log(error)
            })
    }, []);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const _date = d.getDate();
        return `${year}-${month}-${date}`;
    }

    const countryHandler = (e) => {
        setCountry(e.target.value);
        const d = new Date();
        const to = formatDate(d);
        const from = formatDate(d.setDate(d.getDate() - 7));

        console.log(from, to);
        getCoronaProgress(e.target.value, from, to);
    }

    const daysHandler = (e) => {
        setDays(e.target.value);
    }

    const getCoronaProgress = (countrySlug, from, to) => {
        axios.get(`/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
            .then(res => {
                console.log(res);
                const yAxisCoronaCount = res.data.map(d => d.Cases);
                setCoronaCountArray(yAxisCoronaCount)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="App">
            <div>
                <div>
                    <select value={country} onChange={countryHandler}>
                        {
                            covidProgress.Countries && covidProgress.Countries.map(country =>
                                <option key={country.Slug} value={country.Slug}>{country.Country}</option>
                            )
                        }
                    </select>
                    <select value={days} onChange={daysHandler}>
                        <option value="7">Last 7 Days</option>
                        <option value="30">Last 30 Days</option>
                        <option value="90">Last 90 Days</option>

                    </select>
                </div>
                <ProgressGraph
                yAxis={coronaCountArray}
            />
            </div>
        </div>
    );
}
export default Stats;