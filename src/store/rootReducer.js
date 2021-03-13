import authReducer from 'auth/authReducer';
import modalReducer from '../modals/modalReducer';

const rootReducer = combineReducers({
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer;