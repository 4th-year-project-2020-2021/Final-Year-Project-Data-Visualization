import React, {useState} from 'react';
import {BrowserRouter as Browser, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Covid19 from '../Routes/Covid19';
import Search from '../Routes/Search';
import MersAndSars from '../Routes/MersAndSars';
import Smallpox from '../Routes/Smallpox';
import Comparison from '../Routes/Comparison';
import Profile from '../Routes/Profile';
import Upload from '../Routes/Upload';
import Header from './Header';
import Auth from '../Routes/Auth';

function Router({isLoggedIn}){
    return (
        <Browser>
          <>
            {isLoggedIn && <Header /> }
            <Switch>
              {isLoggedIn ? (
                <>
                   <Route exact path="/">
                     <Home />
                   </Route> 
                   <Route path="/covid19" component={Covid19} />
                   <Route path="/search" component={Search} />
                   <Route path="/mersandsars" component={MersAndSars} />
                   <Route path="/smallpox" component={Smallpox} />
                   <Route path="/comparison" component={Comparison} />
                   <Route path="/profile" component={Profile} />
                   <Route path="/upload" component={Upload} />
                   <Redirect from="*" to="/" /> 
                </>
              ):(
               <> 
                <Route exact path="/">
                  <Auth />
                </Route>
                <Redirect from="*" to="/" /> 
               </>
              )}
          </Switch>
          </>
        </Browser>
    )
    
}
export default Router;