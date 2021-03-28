import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Auth from 'FirebaseAuth/Auth';
import Rating from 'Routes/Home';
import Covid19 from 'Routes/Covid19';
import Stats from 'Routes/Stats';
import MersAndSars from 'Routes/MersAndSars';
import Comparison from 'Routes/Comparison';
import Smallpox from 'Routes/Smallpox';
import Create from 'Routes/Create';
import Item from 'Routes/Item';
import Upload from 'Routes/Upload';
import Discussion from 'FirebaseAuth/Discussion';
import Profile from 'FirebaseAuth/Profile';
import Navigation from './Navigation';

const AppRouter = ({refreshUser, authenticated , userObj}) => {
   
    return (
        <Router >
            {authenticated && <Navigation userObj={userObj} />}
            <Switch>
                {authenticated ? (
                <div
                    style={{
                        width: "100%",
                        margin: "0 auto",
                        marginTop: 80,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                  <Route exact path="/">
                    <Rating />
                  </Route>
                  <Route exact path="/covid19">
                    <Covid19 />
                  </Route>
                  <Route exact path="/stats">
                    <Stats />
                  </Route>
                  <Route exact path="/mersandsars">
                    <MersAndSars />
                  </Route>
                  <Route exact path="/comparison">
                    <Comparison />
                  </Route>
                  <Route exact path="/smallpox">
                    <Smallpox />
                  </Route>
                  <Route exact path="/create">
                    <Create />
                  </Route>
                  <Route exact path="/item">
                    <Item />
                  </Route>
                  <Route exact path="/upload">
                    <Upload />
                  </Route>
                  <Route exact path="/profile">
                    <Profile userObj={userObj} refreshUser={refreshUser} />
                  </Route>
                  <Route exact path="/discussion">
                    <Discussion userObj={userObj}/>
                  </Route>
                  <Redirect from="*" to="/" />
                </div>
                 ) : (
                  <Route exact path="/"> 
                      <Auth />
                  </Route>
                 )}
            </Switch>
        </Router>
    );
};
export default AppRouter;