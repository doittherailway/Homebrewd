import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';
import checkinsReducer from './checkins_reducer';
import breweriesReducer from './breweries_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    beers: beersReducer,
    breweries: breweriesReducer,
    checkins: checkinsReducer,
    search: searchReducer
});

export default entitiesReducer;