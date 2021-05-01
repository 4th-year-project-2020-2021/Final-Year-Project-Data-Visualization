import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from 'FirebaseAuth/Auth';
import Ratings from 'Routes/Home';
import Covid19 from 'Routes/Covid19';
import Stats from 'Routes/Stats';
import MersAndSars from 'Routes/MersAndSars';
import Comparison from 'Routes/Comparison';
import Smallpox from 'Routes/Smallpox';
import TestGraph from 'Routes/TestGraph';
import Create from 'Routes/Create';
import Item from 'Routes/Item';
import Upload from 'Routes/Upload';
import Discussion from 'FirebaseAuth/Discussion';
import Profile from 'FirebaseAuth/Profile';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';

const AppRouter = ({ refreshUser, authenticated, userObj }) => {

  return (
    <Router >
      {authenticated && <Navigation userObj={userObj} />}
      <Switch>
        {authenticated ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Route exact path="/">
              <Ratings />
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
            <Route exact path="/testgraph">
              <TestGraph />
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
              <Discussion userObj={userObj} />
            </Route>
            <Redirect from="*" to="/" />
          </div>
        ) : (
          <div>
            <Navigation2 />
            <Route exact path="/">
              <Ratings />
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
            <Route exact path="/testgraph">
              <TestGraph />
            </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
          </div>

        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;