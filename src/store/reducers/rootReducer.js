import authReducer from './authReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
    {
        cartReducer,
        authReducer,
    })

export default rootReducer