import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import firebase from './FirebaseAuth/firebase';

console.log(firebase);

ReactDOM.render( 
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById('root')
);



