import { RECEIVE_BEER, RECEIVE_ALL_BEERS } from '../actions/beer_actions';
import { RECEIVE_ALL_CHECKINS } from '../actions/checkin_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const breweriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BEER:
            newState[action.brewery.id] = action.brewery;
            return newState;
        case RECEIVE_ALL_BEERS:
            return action.breweries; //is this how it's coming in?
        case RECEIVE_ALL_CHECKINS:
            if (action.breweries !== undefined) {
                return action.breweries;
            } else {
                return newState;
            }
        case RECEIVE_USER:
            return {}
        default:
            return state;
    }

};

export default breweriesReducer;