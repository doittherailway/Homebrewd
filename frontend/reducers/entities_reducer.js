import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';
import checkinsReducer from './checkins_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    beers: beersReducer,
    checkins: checkinsReducer
});

export default entitiesReducer;