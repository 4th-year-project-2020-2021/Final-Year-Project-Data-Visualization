import React, {useState} from 'react';
import {BrowserRouter as Browser, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Covid19 from '../Routes/Covid19';
import MersAndSars from '../Routes/MersAndSars';
import Smallpox from '../Routes/Smallpox';
import Comparison from '../Routes/Comparison';
import Upload from '../Routes/Upload';
import Header from '../Nav/Navbar';
import Create from '../Routes/Create';
import Item from '../Routes/Item'
import Stats from 'Routes/Stats';
import Sandbox from '../sandbox/Sandbox';
import LoginForm from '../auth/LoginForm';
import ModalManager from '../modals/ModalManager';


function Router(){
    return (
        <Browser>
          <>
            <ModalManager />
            <Header />
            <Switch>
                <>
                   <Route exact path="/">
                     <Home />
                   </Route>
                   <Route path="/covid19" component={Covid19} />
                   <Route path="/stats" component={Stats} />
                   <Route path="/mersandsars" component={MersAndSars} />
                   <Route path="/smallpox" component={Smallpox} />
                   <Route path="/comparison" component={Comparison} />
                   <Route path="/upload" component={Upload} />
                   <Route path="/create" component={Create}/>
                   <Route path="/item" component={Item} />
                   <Route path="/sandbox" component={Sandbox} />
                   <Route path="/loginForm" component={LoginForm} />
                   <Redirect from="*" to="/" />
                </>
          </Switch>
          </>
        </Browser>
    )

}
export default Router;
