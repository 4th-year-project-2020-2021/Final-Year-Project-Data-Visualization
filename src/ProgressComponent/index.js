/**
 * @author Grace Keane
 * 
 * Stats component. Provides easy way to access cards, chart and drop down country picker
 * and provides functions to access and filter API data.
 */
import axios from 'axios';
export { default as Cards } from '../ProgressComponent/Cards/Cards';
export { default as Chart } from '../ProgressComponent/Chart/Chart';
export { default as CountryPicker } from '../ProgressComponent/CountryPicker/CountryPicker';

// Loading in api data
const url = 'https://covid19.mathdro.id/api';

// Retrieving data
export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        // Filtering the data i need
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;
    } catch (error) { // Error handling
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}