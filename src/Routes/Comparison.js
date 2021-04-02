import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ChartWrapper2 from '../D3ComparisonComponents/ChartWrapper2';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #FFFFF0;
    color:black;
`;

class Comparison extends React.Component{


    render(){
        return <Wrapper className="App">
        <Navbar bg="success">
            <Navbar.Brand>HOW COVID-19 compares to past epidemics</Navbar.Brand>
        </Navbar>
        <Container>
         <ChartWrapper2 />
        </Container>
    </Wrapper>
    }
}
export default Comparison;