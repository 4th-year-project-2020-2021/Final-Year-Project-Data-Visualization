import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
import GoogleMapReact from 'google-map-react';
import NumberFormat from 'react-number-format';
import Navbar from 'react-bootstrap/Navbar';
import ReactApexChart from "react-apexcharts";
import { color } from 'd3';

// Referances
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Time formats - https://www.npmjs.com/package/react-moment
// Search bar - https://react-bootstrap.github.io/components/forms/
// Google map - https://www.npmjs.com/package/google-map-react
// Number format - https://www.npmjs.com/package/react-number-format

//  Reusable - <CardColumns> {countries} </CardColumns>

function Covid19(){

    // Chart styling https://www.npmjs.com/package/react-apexcharts
    const series = [{
        name: 'Cases',
        data: [557, 81376, 199970, 958586, 3368225, 6284173]
      }, {
        name: 'Recovered',
        data: [30, 30386, 80830, 193096, 1051859, 378025]
      },
      {
        name: 'Deaths',
        data: [17, 2771, 7967, 50481, 242367, 2692028]
      }];
      const options = {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
              "1/22/20",
              "2/26/20",
              "3/17/20",
              "4/1/20",
              "5/1/20",
              "6/1/20"
            ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    };

    // Storing data inside array
    // Top cards
    const[latest, setLatest] = useState([]);
    // Country cards
    const[results, setResults] = useState([]);
    // Search bar
    const[searchCountry, setSearchCountry] = useState("");
        
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
        
    // Getting updated time by converting miliseconds
    const date = new Date(parseInt(latest.updated))
    const lastUpdated = date.toString();

    // Filter search
    const filterCountry = results.filter(item  =>{
        // If search and country the same -> return info
        return searchCountry !== "" ? item.country.includes(searchCountry) : item;
    })

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
                
                <img height="10px" src={data.countryInfo.flag}/>
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
            lat={data.countryInfo.lat}
            lng={data.countryInfo.long}
            
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
            <Navbar bg="light">
                <Navbar.Brand>COVID-19 Live Data & Visuals </Navbar.Brand>
            </Navbar>
            
              
            <CardDeck>
                <Card bg="secondary" text="white" className="text-center" style={{margin: "10px"}} border="primary">
                    <Card.Body>
                    <Card.Title>Total Cases</Card.Title>
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
                <Card bg="danger" text={"white"} className="text-center" style={{margin: "10px"}} border="primary">
                    <Card.Body>
                    <Card.Title>Total Deaths</Card.Title>
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
                <Card bg="success" text={"white"} className="text-center" style={{margin: "10px"}} border="primary">
                    <Card.Body>
                    <Card.Title>Total Recovered</Card.Title>
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

             <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCMOO2VKuGpExDi9NjZ0jAofu5FOGJ4QbE" }}
                    defaultCenter={{lat: 28, lng: 3}}
                    // Zoom level
                    defaultZoom={3}
                >
                    {countriesLocation}
                </GoogleMapReact>
            </div>        
            <br/>

            <br></br>

            <Navbar bg="light">
                <Navbar.Brand>Line Graph </Navbar.Brand>
            </Navbar>
            <br></br>

            <ReactApexChart options={options} series={series} type="area" height={500} />           

            <br></br>

            <Navbar bg="light">
                <Navbar.Brand> Statistics </Navbar.Brand>
            </Navbar>
            <br></br>
           
        </div>
    );
}

export default Covid19;