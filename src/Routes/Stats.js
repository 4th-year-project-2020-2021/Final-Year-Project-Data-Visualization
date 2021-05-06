import React from 'react'
import { Cards, Chart, CountryPicker, fetchData } from '../ProgressComponent';

class Stats extends React.Component {

    render() {
        const { data, country } = this.state;
        return (
            <div>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country}/>


            </div>
        )
    }

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    // Change state of country
    handleCountryChange = async (country) => {
        // Fetch data and set state
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });

    }

}

export default Stats;