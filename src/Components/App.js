import React, {useEffect, useState} from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";


function App() {

     return (
      <>
        <Router/> 
        <GlobalStyles />
        
        <footer>&copy; {new Date().getFullYear()} React Data Visualization</footer>
      </>
    )
}

export default App;
