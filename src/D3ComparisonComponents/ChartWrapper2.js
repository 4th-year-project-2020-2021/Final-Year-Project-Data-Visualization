/**
 * @author Jina Kim
 *
 * Access D3 codes
 * 
 */

import React, { Component } from 'react';
import D3Comparison from './D3Components/D3Comparison';
import D3Piechart from './D3Components/D3PieChartCovid19';
import D3PieChartSars from './D3Components/D3PieChartSars';
import D3PieChartMers from './D3Components/D3PieChartMers';
import styled from 'styled-components';

// Reference
// https://medium.com/@mautayro/d3-react-and-using-refs-e25b9a817a43
// https://www.udemy.com/course/d3-react/

const Wrapper = styled.div`
    background: #f5f6fa;
`;

export default class ChartWrapper extends Component {

    componentDidMount() {
        this.setState({
            //To make an instance of D3Chart class
            chart: new D3Comparison(this.refs.chart),
            chart2: new D3Piechart(this.refs.chart2),
            chart3: new D3PieChartSars(this.refs.chart3),
            chart4: new D3PieChartMers(this.refs.chart4)
        })
    }

    //This allows me specify whether or not I want to re-render a react componenet when something changes
    shouldComponentUpdate() {  //render() will not be invoked if shouldComponentUpdate() returns false.
        return false
    }

    //componentWillReceiveProps(nextProps){
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.state.chart.update(nextProps.virus)
    }


    render() {
        //lifecycle method uses the ref system to keep track of an element
        return <Wrapper>
            <div ref="chart"></div>
            <div ref="chart2"></div>
            <div ref="chart3"></div>
            <div ref="chart4"></div>
        </Wrapper>
    }
}

