import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Columns from 'react-columns'
import Form from 'react-bootstrap/Form'
import GoogleMapReact from 'google-map-react';
import NumberFormat from 'react-number-format';
import Table from './Table';
import { CardContent } from '@material-ui/core';
import "../CSSFiles/map.css";

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

    // Filter search
    const filterCountry = results.filter(item  =>{
        // If search and country the same -> return info
        return item.country  === searchCountry;
    })
    
    // Table cases state
    const [tableData, setTableData] = useState([]);
        
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
                style={{margin: "10px"}}
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
                    <small>Last updated {lastUpdated}</small>
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
                    <small>Last updated {lastUpdated}</small>
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
                    <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
            </CardDeck> 


            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Label> Search </Form.Label>
                    <br></br>
                    <Form.Control
                        type="text"
                        placeholder="Search a Country"
                        onChange={e => setSearchCountries(e.target.value)}
                    />
                </Form.Group>
                <Columns queries={queries}> {countries} </Columns>
            </Form> 

             <div className="map" style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCMOO2VKuGpExDi9NjZ0jAofu5FOGJ4QbE" }}
                    defaultCenter={{lat: 28, lng: 3}}
                    // Zoom level
                    defaultZoom={3}
                >
                    {countriesLocation}
                </GoogleMapReact>

            </div>   
            <div>
                <Card className="app_right">
                    <CardContent>
                        <h3> List Cases by Country </h3>
                        <Table countries={tableData}/>
                        {/* Graph */}
                    
                    </CardContent>
                </Card>
            </div>     
        </div>

        
    );
}

export default Covid19;