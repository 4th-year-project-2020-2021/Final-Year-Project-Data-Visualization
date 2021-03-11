import React from 'react';
import {useSelector} from 'react-redux';

export default function Sandbox(){

  const data = useSelector(state => state.data);

    return (
      <>
        <h1>Testing</h1>
        <h2>The data is: {data}</h2>
        <h1>Testing</h1>
        <h2>The data is: {data}</h2>
        <h1>Testing</h1>
        <h2>The data is: {data}</h2>
        <h1>Testing</h1>
        <h2>The data is: {data}</h2>
      </>   
    )

}