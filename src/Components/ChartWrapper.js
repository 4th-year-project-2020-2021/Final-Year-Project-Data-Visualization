import React, {Component} from 'react';
import D3MersSars from '../D3/D3MersSars';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #F0FFF0;
`;

export default class ChartWrapper extends Component{

    componentDidMount(){
        this.setState({
                    //To make an instance of D3Chart class
            chart : new D3MersSars(this.refs.chart)
        })
    }

    //This allows me specify whether or not I want to re-render a react componenet when something changes
    shouldComponentUpdate(){  //render() will not be invoked if shouldComponentUpdate() returns false.
        return false
    }

    //componentWillReceiveProps(nextProps){
    UNSAFE_componentWillReceiveProps(nextProps){
        this.state.chart.update(nextProps.virus)
    }


    render(){
        //lifecycle method uses the ref system to keep track of an element
        return <Wrapper>
            <div ref="chart"></div>
        </Wrapper>
    }
}