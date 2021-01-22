import React from 'react';
import D3Comparison from '../D3/D3Comparison';
import Navbar from 'react-bootstrap/Navbar';

class Comparison extends React.Component{

    componentDidMount(){
        new D3Comparison(this.refs.chart);
    }

    render(){
        return <div ref="chart">
            <Navbar bg="light">
                <Navbar.Brand>A comparison of COVID-19, SARS and MERS</Navbar.Brand>
            </Navbar>
        </div>
    }
}
export default Comparison;