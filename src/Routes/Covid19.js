import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Columns from 'react-columns'

// Adapted from 
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Time formats - https://www.npmjs.com/package/react-moment

function Covid19(){
    // Storing data inside array
    const[latest, setLatest] = useState([]);
    const[results, setResults] = useState([]);
    
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

    // Creating a reusable component for country data
    const countries = results.map((data, i) => {
        return (
            <Card
            key={i}
                bg="dark"
                text="light"
                className="text-center"
                style={{margin: "10px"}}
            >

            <Card.Img variant= "top" src={data.countryInfo.flag} />
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
            <Columns queries={queries}> {countries} </Columns>
        </div>
    );
}

export default Covid19;