import React, {useState} from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import {authService} from './Fbase';

function App() {
    //console.log(authService.currentUser);
    //const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); 
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    return (
      <>
        <Router isLoggedIn={isLoggedIn}/>
        <GlobalStyles />
        <footer>&copy; {new Date().getFullYear()} React Data Visualization</footer>
      </>
    )
}

export default App;
