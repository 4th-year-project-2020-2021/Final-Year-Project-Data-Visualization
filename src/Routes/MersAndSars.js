/**
 * @author Jina Kim
 *
 * This component will manage how to change the data through the dropdown button in Mers_Sars component
 * 
 */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import VirusDropdown from '../D3MersSarsComponents/D3Components/VirusDropdown';
import ChartWrapper from '../D3MersSarsComponents/ChartWrapper';
import styled from 'styled-components';

// Referances
// https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component
// https://react-bootstrap.github.io/components/navbar/

const Wrapper = styled.div`
    color:black;
`;

class MersAndSars extends React.Component{
    
    state={
        virus:"mers"
    }

    virusSelected=(virus)=>{
        this.setState({
          //virus:virus
          virus
        })
    }
    
    render(){
        return <Wrapper className="App">
            <Navbar bg="light">
                <Navbar.Brand>MERS and SARS</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                <Col xs={12}><VirusDropdown virusSelected={this.virusSelected} /></Col>
                </Row>
                <Row>
                    <Col xs={12}><ChartWrapper virus={this.state.virus} /></Col>
                </Row>
            </Container>
        </Wrapper>
    }
}
export default MersAndSars;
