import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    beers: beersReducer
});

export default entitiesReducer;