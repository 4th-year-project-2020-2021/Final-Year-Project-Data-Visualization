import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Table from "../CovidComponents/Table";
import { CardContent, Select } from '@material-ui/core';
import { sortData, prettyPrintStat } from "../CovidComponents/util";
import { MenuItem, FormControl } from "@material-ui/core";
import InfoBox from '../CovidComponents/InfoBox';
import LineGraph from "../CovidComponents/LineGraph";
import VaccineLineGraph from "../CovidComponents/VaccineLineGraph";
import Map from "../CovidComponents/Map";
import "leaflet/dist/leaflet.css";
import "../css/styling.css";

// Referances
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Google map - https://www.npmjs.com/package/google-map-react

function Covid19() {
    // Storing data inside array
    // Top cards
    const [latest, setLatest] = useState([]);
    // Country cards
    const [results, setResults] = useState([]);
    // Table
    const [tableData, setTableData] = useState([]);
    // Select country, default = worldwide
    const [country, setSelectCountry] = useState('worldwide');
    // Drop down list
    const [dropcountries, setDropDownCountries] = useState([]);
    const [countryInfo, setCountryInfo] = useState({});
    const [casesType, setCasesType] = useState("cases");
    const [vaccineType, setVaccineType] = useState("timeline");
    const [mapCenter, setMapCenter] = useState({ lat: 28, lng: 3 });
    const [mapZoom, setZoomCenter] = useState(2);
    const [mapCountries, setMapCountries] = useState([]);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
    }, []);

    // useEffect runs a piece of code based
    // on a given condition
    useEffect(() => {
        // Code run once when the component loads
        // and not again

        const getDropDownCountries = async () => {
            // Send a req to server, wait, do something
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    // Restructure countries 
                    const dropcountries = data.map((country) => ({
                        name: country.country, // e.g. Ireland
                        value: country.countryInfo.iso2, // e.g. IRE
                    }));
                    const sortedData = sortData(data);
                    setDropDownCountries(dropcountries);
                    setTableData(sortedData);
                    //setMapCountries(dropcountries);
                    setMapCountries(data);
                });
        };
        // calling the function
        getDropDownCountries();
    }, []);

    // Dealing with two APIs at once
    useEffect(() => {
        axios
            .all([
                // API for cards (cases, deaths, recoveres values) 
                axios.get("https://corona.lmao.ninja/v2/all"),
                // API for countrys
                axios.get("https://corona.lmao.ninja/v2/countries")
            ])
            .then(responceArr => {
                setLatest(responceArr[0].data);
                setResults(responceArr[1].data);
                setTableData(responceArr[2].data);
            })
            // Return an error (if any)
            .catch(err => {
                console.log(err);
            });
    }, []);


    // Adapted from https://www.npmjs.com/package/react-columns
    var queries = [{
        columns: 2,
        query: 'min-width: 500px'
    }, {
        columns: 3,
        query: 'min-width: 1000px'
    }];

    // When click country on a drop down it prints the 
    // country code to console
    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        // Testing
        console.log("Testing code: ", countryCode);
        // Allow selected country to be listed instead 
        // of "Worldwide"
        setSelectCountry(countryCode);
        const url =
            countryCode === "worldwide"
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Store selected country
                setSelectCountry(countryCode);

                countryCode === "worldwide"
                    ? setZoomCenter(2)

                    // Map zooms in to scecific country when selected from drop down
                    : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                // Set zoom level
                setZoomCenter(4);
            });
    };
    console.log("Country info", countryInfo);

    return (
        <div>
            <div className="app">
                <div className="app__left">
                    <div className="app__header">
                        <h3 className="Heading">COVID-19</h3>

                        <FormControl className="app__dropdown">
                            <Select variant="outlined" onChange={onCountryChange} value={country}>
                                <MenuItem value="worldwide">Worldwide</MenuItem>
                                {dropcountries.map(country => (
                                    <MenuItem value={country.value}>{country.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <br></br>
                    <div className="app__stats">
                        <InfoBox
                            isBlack
                            onClick={e => setCasesType('cases')}
                            active={casesType === "cases"}
                            title="Total Cases Wordwide"
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={prettyPrintStat(countryInfo.cases)} />
                        <InfoBox
                            isBlack
                            onClick={e => setCasesType('recovered')}
                            active={casesType === "recovered"}
                            title="Total Recovered Worldwide"
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={prettyPrintStat(countryInfo.recovered)} />

                        <InfoBox
                            isBlack
                            onClick={e => setCasesType('deaths')}
                            active={casesType === "deaths"}
                            title="Total Deaths Worldwide"
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={prettyPrintStat(countryInfo.deaths)} />

                    </div>
                    <br></br>
                    <h3 className="app__header">Interact with the Map</h3>
                    <div>
                        <Map
                            countries={mapCountries}
                            casesType={casesType}
                            center={mapCenter}
                            zoom={mapZoom}
                        />
                    </div>
                </div>
                <Card className="app__right">
                    <CardContent>
                        <div className="app__information">
                            <h3>Global Cases - High to Low</h3>
                            <Table countries={tableData} />
                            <br></br>
                            <br></br>
                            <h3>Worldwide past 120 days {casesType}</h3>
                            <br></br>
                            <br></br>
                            <LineGraph casesType={casesType} />
                            <br></br>
                            <br></br>
                            <h3>Ireland Vaccinations</h3>
                            <VaccineLineGraph vaccineType={vaccineType} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default Covid19;