import React from 'react';
import D3Chart from '../D3/D3Chart';
import Navbar from 'react-bootstrap/Navbar';

class MersAndSars extends React.Component{
    componentDidMount(){
        new D3Chart(this.refs.chart);
    }

    render(){
        return <div ref="chart">
            <Navbar bg="light">
                <Navbar.Brand>SARS and MERS</Navbar.Brand>
            </Navbar>
        </div>
    }
}
export default MersAndSars;