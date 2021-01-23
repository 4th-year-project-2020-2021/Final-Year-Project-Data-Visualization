import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import VirusDropdown from '../D3/VirusDropdown';
import ChartWrapper from '../Components/ChartWrapper';

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
        return <div className="App">
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
        </div>
    }
}
export default MersAndSars;