import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './Components/App';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import ScrollToTop from 'Layout/ScrollToTop';
import {BrowserRouter} from 'react-router-dom';

const store = configureStore();
console.log(store.getState());

ReactDOM.render( <Provider store={store}><BrowserRouter><ScrollToTop /><App /></BrowserRouter></Provider>, document.getElementById('root'));



