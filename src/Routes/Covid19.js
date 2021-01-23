import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
// Adapted from 
// Styling - https://react-bootstrap.github.io/components/cards/
// Styling - https://react-bootstrap.github.io/getting-started/introduction/
// Get API - https://www.npmjs.com/package/axios
// Time formats - https://www.npmjs.com/package/react-moment

function Covid19(){
    const[latest, setLatest] = useState("use");
    
    useEffect(() => {
        axios
            // API for cards (cases, deaths, recoveres values) 
            .get("https://corona.lmao.ninja/v2/all")
            .then(res => {
                setLatest(res.data);
            })
            // Return an error (if any)
            .catch(err => {
                console.log(err);
            });
        }, []);
        
    // Getting updated time by converting miliseconds
    const date = new Date(parseInt(latest.updated))
    const lastUpdated = date.toString();

    return(
        <div>
            <CardDeck>
                <Card bg="secondary" text="white" className="text-center" style={{margin: "10px"}}>
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
                <Card bg="danger" text={"white"} className="text-center" style={{margin: "10px"}}>
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
                <Card bg="success" text={"white"} className="text-center" style={{margin: "10px"}}>
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
        </div>
    );
}

export default Covid19;