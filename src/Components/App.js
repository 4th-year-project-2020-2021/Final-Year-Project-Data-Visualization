import React, {useEffect, useState} from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import {authService} from './Fbase';


function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    useEffect( ()=>{  // Listen for a change on a user
      authService.onAuthStateChanged( (user)=> {
        if(user){
          setIsLoggedIn(true);
        }else{
          setIsLoggedIn(false);
        }
        setInit(true);
      })
    },[])

    return (
      <>
        {init ? <Router isLoggedIn={isLoggedIn} /> : "initializing..."}
        <GlobalStyles />
        <footer>&copy; {new Date().getFullYear()} React Data Visualization</footer>
      </>
    )
}

export default App;
