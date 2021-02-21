import React, {useState} from 'react';
import {BrowserRouter as Browser, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Covid19 from '../Routes/Covid19';
import MersAndSars from '../Routes/MersAndSars';
import Smallpox from '../Routes/Smallpox';
import Comparison from '../Routes/Comparison';
import Upload from '../Routes/Upload';
import Header from './Header';


function Router({isLoggedIn}){
    return (
        <Browser>
          <>
            <Header />
            <Switch>
                <>
                   <Route exact path="/">
                     <Home />
                   </Route> 
                   <Route path="/covid19" component={Covid19} />
                   <Route path="/mersandsars" component={MersAndSars} />
                   <Route path="/smallpox" component={Smallpox} />
                   <Route path="/comparison" component={Comparison} />
                   <Route path="/upload" component={Upload} />
                   <Redirect from="*" to="/" /> 
                </>
          </Switch>
          </>
        </Browser>
    )
    
}
export default Router;