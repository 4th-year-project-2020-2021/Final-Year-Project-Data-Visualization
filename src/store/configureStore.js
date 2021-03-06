import {createStore} from 'redux';
import testReducer from '../sandbox/testReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';

export function configureStore() {
    return createStore(testReducer,devToolsEnhancer());
}