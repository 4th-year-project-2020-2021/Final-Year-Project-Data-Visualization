import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import GoogleMapReact from 'google-map-react';
import Table from "../CovidComponents/Table";
import { CardContent, Select } from '@material-ui/core';
import { sortData } from "../CovidComponents/util";
import { MenuItem, FormControl } from "@material-ui/core";
import InfoBox from '../CovidComponents/InfoBox';
import LineGraph from "../CovidComponents/LineGraph";
import { MapContainer, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet";
import "../css/styling.css";

// Referances
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Google map - https://www.npmjs.com/package/google-map-react

function Covid19(){

    // Storing data inside array
    // Top cards
    const[latest, setLatest] = useState([]);
    // Country cards
    const[results, setResults] = useState([]);
    // Search bar
    const[searchCountry, setSearchCountries] = useState("");
    // Getting updated time by converting miliseconds
    const date = new Date(parseInt(latest.updated))
    const lastUpdated = date.toString();
    // Table
    const [tableData, setTableData] = useState([]);
    // Filter search
    const filterCountry = results.filter(item  =>{
        // If search and country the same -> return info
        return item.country  === searchCountry;
    })
    // Select country, default = worldwide
    const[country, setSelectCountry] = useState('worldwide');
    // Drop down list
    const [dropcountries, setDropDownCountries] = useState([]);
    const[countryInfo, setCountryInfo] = useState({});
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = 
        useState({ lat: 60, lng: 7 });
    const [mapZoom, setZoomCenter] = useState(3);

    //const [zoom, setZoom] = useState(3);
    
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
        
        const getDropDownCountries = async() => {
        // Send a req to server, wait, do something
        await fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => {
                // Restructure countries 
                const dropcountries = data.map((country)=>({
                    name: country.country, // e.g. Ireland
                    value: country.countryInfo.iso2, // e.g. IRE
                }));
                const sortedData = sortData(data);
                setDropDownCountries(dropcountries);
                setTableData(sortedData);
            });
        };
        // calling the function
        getDropDownCountries();
    },[]);

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

    // Assigning country markers to cases 
    const countriesLocation = results.map((data, i) => {
        return (
            <div
                // Using latitude and longitude to plot
                lat={data.countryInfo.lat}
                lng={data.countryInfo.long}
                // Various styling of marker
                style={{
                    color: "black",
                    backgroundColor: "#FFF",
                    height: "25px",
                    width: "42px",
                    textAlign: "center",
                    borderRadius: "20%",
                }}
            >   
                <img className="ImgHeight"height="10px" src={data.countryInfo.flag}/>
                {data.cases}
            </div>
        );
    });

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
    const onCountryChange = async(event) => {
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
            // Store responce
            setCountryInfo(data);
        });
    };
    console.log("Country info", countryInfo);

    return(
        <div>  
            <div className="app">
            <div className="app__left">
                    <div className="app__header">
                        <h3>COVID-19 Live</h3>
                        <br></br>
                    <FormControl className="app__dropdown">
                        <Select variant="outlined" onChange={onCountryChange} value={country}>
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            { dropcountries.map(country =>(
                                <MenuItem value={country.value}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <br></br>
                <div className="app__stats">
                    <InfoBox title="Cases today & total cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
                    <InfoBox title="Recovered today & total recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
                    <InfoBox title="Deaths today & total deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
                </div>
                <br></br>

                <h3 className="app__header">Interact with the Map</h3>

                <div>
                    <MapContainer
                        className="mapidd"
                        center={mapCenter}
                        zoom={mapZoom}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />

                        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                        crossorigin=""/>

                        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                        crossorigin=""></script>

                        <div id="mapid"></div>
                
                    </MapContainer>

                </div>
                <br></br>
                    <h1 className="app__header">Total cases per country</h1>
                    <div className="map" style={{ height: '70vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCMOO2VKuGpExDi9NjZ0jAofu5FOGJ4QbE" }}
                            defaultCenter={{lat: 28, lng: 3}}
                            // Zoom level
                            defaultZoom={1}
                        >
                            {countriesLocation}
                        </GoogleMapReact>
                    </div>  
                    <br></br>
                </div> 
                <Card className="app__right">
                    <CardContent>
                        <div className="app__information">
                            <h3>Global Cases - High to Low</h3>
                            <Table countries={tableData} />
                            <br></br>
                            <br></br>
                            <h3>Worldwide past 120 days cases</h3>
                            <br></br>
                            <br></br>
                            <LineGraph casesType={casesType} />
                        </div>
                    </CardContent>
                </Card>    
            </div>
        </div>  
    );
}
export default Covid19;