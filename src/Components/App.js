import React, {useEffect, useState} from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import {authService} from './Fbase';

function App() {
<<<<<<< Updated upstream
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
=======
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() =>{
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  },[]);
  // fetch tasks
  const [getHello, setGetHello] = useState(0);
  useEffect(() =>{
    fetch('/hello').then(res =>res.json()).then(data =>{
      setGetHello(data.hello);
    });
  },[]);
>>>>>>> Stashed changes

    return (
      <>
        {init ? <Router isLoggedIn={isLoggedIn} /> : "initializing..."}
        <GlobalStyles />
        <p>The current time is {currentTime}</p>
        <p>This is from the flask api {getHello}</p>
        <footer>&copy; {new Date().getFullYear()} React Data Visualization</footer>
      </>
    )
}

export default App;
