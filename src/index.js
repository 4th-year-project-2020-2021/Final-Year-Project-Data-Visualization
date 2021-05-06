import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
import firebase from './FirebaseAuth/firebase';
import authStyles from './FirebaseAuth/AuthStyles/authStyles.css'; //Need this line for the navigation styling

console.log(firebase);

ReactDOM.render( 
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById('root')
);



