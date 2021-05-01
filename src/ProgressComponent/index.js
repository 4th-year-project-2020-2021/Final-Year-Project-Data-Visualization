import axios from 'axios';
export { default as Cards } from '../ProgressComponent/Cards/Cards';
export { default as Chart } from '../ProgressComponent/Chart/Chart';
export { default as CountryPicker } from '../ProgressComponent/CountryPicker/CountryPicker';

// Loading in api data
const url = 'https://covid19.mathdro.id/api';

// Retrieving data
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        // Filtering the data i need
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;
    } catch (error) {
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

    }
}