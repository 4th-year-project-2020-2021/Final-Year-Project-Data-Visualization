import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Columns from 'react-columns'
import Form from 'react-bootstrap/Form'
import GoogleMapReact from 'google-map-react';
import NumberFormat from 'react-number-format';
import Table from "../Table";
import { CardContent } from '@material-ui/core';
import { sortData } from "../util";
import "../CSSFiles/styling.css";

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

    return(
        <div>  
            <div className="app">
                <div className="app__left"> 
                    <h1 className="app_header">COVID-19 Live</h1>
                    <CardDeck>
                        <Card className="totalC">
                            <Card.Body>
                            <Card.Title>Global Cases</Card.Title>
                            <NumberFormat
                                value={latest.cases} 
                                displayType={'text'} 
                                thousandSeparator={true}>
                            </NumberFormat>
                            </Card.Body>
                            <Card.Footer>
                            {lastUpdated}
                            </Card.Footer>
                        </Card>
                        <Card className="totalD">
                            <Card.Body>
                            <Card.Title>Global Deaths</Card.Title>
                            <NumberFormat
                                value={latest.deaths} 
                                displayType={'text'} 
                                thousandSeparator={true}>
                            </NumberFormat>
                            </Card.Body>
                            <Card.Footer>
                            {lastUpdated}
                            </Card.Footer>
                        </Card>
                        <Card className="totalR">
                            <Card.Body>
                            <Card.Title>Global Recovered</Card.Title>
                            <NumberFormat
                                value={latest.recovered} 
                                displayType={'text'} 
                                thousandSeparator={true}>
                            </NumberFormat>
                            </Card.Body>
                            <Card.Footer>
                            {lastUpdated}
                            </Card.Footer>
                        </Card>
                    </CardDeck> 
                

                    <div className="map" style={{ height: '80vh', width: '70%' }}>
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
                    <Form>
                        <Form.Group controlId="formGroupSearch">
                            <h3> Search a single Country (Country data updated every evening)</h3>
                            <br></br>
                            <Form.Control
                                type="text"
                                font-size="20"
                                placeholder="Search a Country"
                                onChange={e => setSearchCountries(e.target.value)}
                            />
                        </Form.Group>
                        <Columns queries={queries}> {countries} </Columns>
                    </Form> 
                    
                    </div>

                <Card className="app__right">
                    <CardContent>
                        <div className="app_information">
                            <h2>Live Cases by Country</h2>
                            <Table countries={latest.recovered} />
                            <h3>Worldwide</h3>
                        </div>
                    </CardContent>
                </Card>    
            </div>
            </div> 
    );
}

export default Covid19;