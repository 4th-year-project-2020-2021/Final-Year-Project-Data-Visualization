import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import VirusDropdown from '../MersSarsComponents/D3Components/VirusDropdown';
import ChartWrapper from '../MersSarsComponents/ChartWrapper';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FFFFF0;
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
            <Navbar bg="success">
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