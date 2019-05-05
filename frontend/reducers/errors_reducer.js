import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import beerErrorsReducer from './beer_errors_reducer';
import checkinErrorsReducer from './checkin_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    beers: beerErrorsReducer,
    checkins: checkinErrorsReducer
});

export default errorsReducer;