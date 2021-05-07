import React, { useEffect, useState } from 'react';
import firebase from "../FirebaseAuth/firebase";
import AppRouter from './Router';

// Referances
// https://reactjs.org/docs/hooks-effect.html
// https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component

function App() {
  const [setInit] = useState(false);
  const authService = firebase.auth();
  const [userObj, setUserObj] = useState(null);

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
