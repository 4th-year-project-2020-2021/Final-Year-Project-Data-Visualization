import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ChartWrapper2 from '../D3ComparisonComponents/ChartWrapper2';
import SymptomsDropdown from '../D3ComparisonComponents/D3Components/SymptomsDropdown';
import styled from 'styled-components';

// Referances
// https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component
// https://react-bootstrap.github.io/components/navbar/

const Wrapper = styled.div`
    color:black;
`;

class Comparison extends React.Component{

    state={
        virus:"covid19"
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
            <Navbar.Brand>HOW COVID-19 compares to past epidemics</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                <Col xs={12}><SymptomsDropdown virusSelected={this.virusSelected} /></Col>
                </Row>
                <Row>
                    <Col xs={12}><ChartWrapper2 virus={this.state.virus} /></Col>
                </Row>
            </Container>
        </Wrapper>
    }
}
export default Comparison;
