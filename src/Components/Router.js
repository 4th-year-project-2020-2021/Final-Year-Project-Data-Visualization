import React from 'react';
import {BrowserRouter as Browser, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Covid19 from '../Routes/Covid19';
import Search from '../Routes/Search';
import MersAndSars from '../Routes/MersAndSars';
import Smallpox from '../Routes/Smallpox';

function Router(){
    return (
        <Browser>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/covid19" component={Covid19} />
            <Route path="/search" component={Search} />
            <Route path="/mersandsars" component={MersAndSars} />
            <Route path="/smallpox" component={Smallpox} />
            <Redirect from="*" to="/" />  
          </Switch>
        </Browser>
    )
    
}
export default Router;