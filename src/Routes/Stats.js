import React, { useEffect, useState } from 'react'
import "../css/styling.css";
import ProgressGraph from "../CovidComponents/ProgressGraph";
import axios from 'axios';

function Stats() {
    const [covidProgress, setCovidProgress] = useState({});

    useEffect(() => {

        // Calling api
        axios.get(`https://api.covid19api.com/summary`)
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

    return (
        <div>
            <div>
                <div>
                    <select>
                        {
                            covidProgress.Countries && covidProgress.Countries.map(country =>
                                <option value={country.Slug}>{country.Country}</option>
                            )
                        }
                    </select>
                </div>
            </div>
            <ProgressGraph />
        </div>
    );
}
export default Stats;