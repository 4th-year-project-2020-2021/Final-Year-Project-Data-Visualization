import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import firebase from "../FirebaseAuth/firebase";
import AppRouter from './Router';


function App() {
  const [init, setInit] = useState(false);
  const history = useHistory();
  const authService = firebase.auth();
  const [ authenticated, setAuthenticated ] = useState(true); 
  const [userObj,setUserObj] = useState(null);
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);


  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
        <>
          <AppRouter 
            refreshUser={refreshUser}
            authenticated={Boolean(userObj)} 
            userObj={userObj} 
          /> 
        </>
    );
}

export default App;