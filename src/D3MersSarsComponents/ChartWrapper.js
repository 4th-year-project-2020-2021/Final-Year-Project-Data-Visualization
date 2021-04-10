import React, {Component} from 'react';
import D3MersSars from './D3Components/D3MersSars';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #f5f6fa;
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