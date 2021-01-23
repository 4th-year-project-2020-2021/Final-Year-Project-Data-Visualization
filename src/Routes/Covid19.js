import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css';

// Adapted from 
// https://react-bootstrap.github.io/components/cards/
// https://react-bootstrap.github.io/getting-started/introduction/
function Covid19(){
    return(
        <div>
            <CardDeck>
                <Card bg="secondary" text="white" className="text-center" style={{margin: "10px"}}>
                    <Card.Body>
                    <Card.Title>Covid-19 Cases</Card.Title>
                    <Card.Text>
                        100
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="danger" text={"white"} className="text-center" style={{margin: "10px"}}>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        0
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="success" text={"white"} className="text-center" style={{margin: "10px"}}>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        20
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small>Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Covid19;