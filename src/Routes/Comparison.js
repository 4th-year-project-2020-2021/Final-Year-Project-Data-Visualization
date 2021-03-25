import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SymptomDropdown from '../MersSarsComponents/D3Components/SymptomDropdown';
import ChartWrapper2 from '../MersSarsComponents/ChartWrapper2';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FFFFF0;
    color:black;
`;

class Comparison extends React.Component{

    state={
        virus:"covid19"
    }

    virusSelected=(virus)=>{
        this.setState({
          virus
        })
    }

    render(){
        return <Wrapper className="App">
            <Navbar bg="success">
                <Navbar.Brand>HOW COVID-19 compares to past epidemics</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={12}><SymptomDropdown virusSelected={this.virusSelected} /></Col>
                </Row>
                <Row>
                    <Col xs={12}><ChartWrapper2 virus={this.state.virus} /></Col>
                </Row>
            </Container>
        </Wrapper>
    }
}
export default Comparison;