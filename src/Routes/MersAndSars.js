import React from 'react';
import D3MersSars from '../D3/D3MersSars';
import Navbar from 'react-bootstrap/Navbar';

class MersAndSars extends React.Component{
    
    componentDidMount(){
        new D3MersSars(this.refs.chart);
    }

    render(){
        return <div ref="chart">
            <Navbar bg="light">
                <Navbar.Brand>MERS and SARS</Navbar.Brand>
            </Navbar>
        </div>
    }
}
export default MersAndSars;