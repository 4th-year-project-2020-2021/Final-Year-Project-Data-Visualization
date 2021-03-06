import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Columns from 'react-columns'
import Form from 'react-bootstrap/Form'
import GoogleMapReact from 'google-map-react';
import NumberFormat from 'react-number-format';
import Table from "../CovidComponents/Table";
import { CardContent, FormControlLabel, Select } from '@material-ui/core';
import { sortData } from "../CovidComponents/util";
import { MenuItem, FormControl } from "@material-ui/core";
import InfoBox from '../CovidComponents/InfoBox';
import InfoBox2 from '../CovidComponents/InfoBox2';
import Map from "../CovidComponents/Map";
import "../css/styling.css";

// Referances
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Time formats - https://www.npmjs.com/package/react-moment
// Search bar - https://react-bootstrap.github.io/components/forms/
// Google map - https://www.npmjs.com/package/google-map-react
// Number format - https://www.npmjs.com/package/react-number-format

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

            setDropDownCountries(dropcountries);
            setTableData(data);
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

    // Creating a reusable component for country data
    const countries = filterCountry.map((data, i) => {
        return (
            <Card
            key={i}
                bg="light"
                text="dark"
                className="text-center"
                style={{margin: "4px"}}
            >
            
            <Card.Img variant="top" src={data.countryInfo.flag}/>
            <Card.Body>
                <Card.Title>{data.country}</Card.Title>
                <Card.Text>Cases {data.cases}</Card.Text>
                <Card.Text>Deaths {data.deaths}</Card.Text>
                <Card.Text>Recovered {data.recovered}</Card.Text>
                <Card.Text>Today's Cases {data.todayCases}</Card.Text>
                <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
                <Card.Text>Active {data.active}</Card.Text>
                <Card.Text>Critical {data.critical}</Card.Text>
            </Card.Body>
        </Card>
        )
    })

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
                    <div className="app_header">
                        <h1>COVID-19 Live</h1>
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

                <Map></Map>

                <br></br>
                    <h1 className="app__header">Total cases per country</h1>
                    <div className="map" style={{ height: '80vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCMOO2VKuGpExDi9NjZ0jAofu5FOGJ4QbE" }}
                            defaultCenter={{lat: 28, lng: 3}}
                            // Zoom level
                            defaultZoom={2}
                        >
                            {countriesLocation}
                        </GoogleMapReact>
                    </div>  
                    <br></br>
                   </div> 
                    
                  
                <Card className="app__right">
                    <CardContent>
                        <div className="app_information">
                            <h2>Live Cases by Country</h2>
                            <Table countries={tableData} />
                            <h3>Worldwide</h3>
                        </div>
                    </CardContent>
                </Card>    
            </div>
            </div>
            
    );
}

export default Covid19;