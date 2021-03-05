import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom"

// will check if the user is logged in or not and redirect them to /login if they aren’t logged in:
const PrivateRoute = ({ component: Component, ...rest }) => {
    const [logged] = useAuth();
  
    return <Route {...rest} render={(props) => (
      logged
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
}