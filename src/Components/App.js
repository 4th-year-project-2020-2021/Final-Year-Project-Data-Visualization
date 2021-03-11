import {login, authFetch, useAuth, logout} from "../auth"
import React, {useEffect, useState} from 'react';
import Router from "./Router";
import GlobalStyles from "../Assets/GlobalStyles";

function App() {

    //fetch call to "/api" just to confirm that our React development server is correctly proxying requests to our backend.
    useEffect(() => {
      fetch("/api").then(resp => resp.json()).then(resp => console.log(resp))
    }, [])

     return (
      <>
        <Router/> 
        <GlobalStyles />
        
        <footer>&copy; {new Date().getFullYear()} React Data Visualization</footer>
      </>
    )
}

export default App;
