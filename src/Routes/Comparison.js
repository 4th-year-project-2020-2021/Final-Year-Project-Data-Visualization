import React from 'react';
import D3Comparison from '../D3/D3Comparison';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Comparison extends React.Component{

    componentDidMount(){
        new D3Comparison(this.refs.chart1);
    }

    render(){
        return <div className="App">
            <Navbar bg="light">
                <Navbar.Brand>HOW COVID-19 compares to past epidemics</Navbar.Brand>
            </Navbar>
            <Container>
                <div>
                    <div ref="chart1"></div>
                </div>
            </Container>
        </div>
    }
}
export default Comparison;