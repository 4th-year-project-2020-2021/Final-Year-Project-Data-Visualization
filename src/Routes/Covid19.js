import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
//import GoogleMapReact from 'google-map-react';

// Adapted from 
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Time formats - https://www.npmjs.com/package/react-moment
// Search bar - https://react-bootstrap.github.io/components/forms/

function Covid19(){
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

    // Creating a reusable component for country data
    const countries = filterCountry.map((data, i) => {
        return (
            <Card
            key={i}
                bg="dark"
                text="light"
                className="text-center"
                style={{margin: "10px"}}
            >

            <Card.Img variant= "top" src={data.countryInfo.flag} height="350px"/>
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
            <br/>
            <h3>Live Covid-19 Stats</h3>
            <br/>
      

      
            <CardDeck>
                <Card bg="secondary" text="white" className="text-center" style={{margin: "10px"}} border="primary">
                    <Card.Body>
                    <Card.Title>Cases</Card.Title>
                    <Card.Text>
                        {latest.cases}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                <Card bg="danger" text={"white"} className="text-center" style={{margin: "10px"}} border="primary">
                    <Card.Body>
                    <Card.Title>Deaths</Card.Title>
                    <Card.Text>
                        {latest.deaths}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                <Card bg="success" text={"white"} className="text-center" style={{margin: "10px"}} border="primary">
                    <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text>
                        {latest.recovered}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Label>Search Country</Form.Label>
                    <br/>
                    <Form.Control type="text" placeholder="Enter a Country by name" onChange={e => setSearchCountry(e.target.value)} />
                </Form.Group>
            </Form>
            <br/>
            <CardColumns> {countries} </CardColumns>
        </div>
    );
}

export default Covid19;