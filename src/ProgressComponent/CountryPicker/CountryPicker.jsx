/**
 * @author Grace Keane
 * 
 * Stats component for generating on click country picker which
 * links to the stats chart when on-clicked.
 */
import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../ProgressComponent';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI();
    }, [setFetchedCountries]);
    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;