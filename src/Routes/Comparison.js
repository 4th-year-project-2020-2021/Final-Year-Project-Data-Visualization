import React from 'react';
import D3Comparison from '../D3/D3Comparison';
import Navbar from 'react-bootstrap/Navbar';

class Comparison extends React.Component{

    componentDidMount(){
        new D3Comparison(this.refs.chart1);
    }

    render(){
        return <div ref="chart1">
            <Navbar bg="light">
                <Navbar.Brand>COVID-19, MERS and SARS</Navbar.Brand>
            </Navbar>
        </div>
    }
}
export default Comparison;