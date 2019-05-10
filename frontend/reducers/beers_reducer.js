import {RECEIVE_ALL_BEERS, RECEIVE_BEER, REMOVE_BEER} from '../actions/beer_actions';
import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN } from '../actions/checkin_actions';

const beersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_BEERS:
            return action.beers;
        case RECEIVE_BEER:
            newState[action.beer.id] = action.beer;
            return newState;
        case REMOVE_BEER:
            delete newState[action.beerId];
            return newState;
        case RECEIVE_ALL_CHECKINS:
            if (action.beers !== undefined) {
            return action.beers;
            } else {
                return newState;
            }
        case RECEIVE_CHECKIN:
            newState[action.beer.id] = action.beer;
            return newState;
        default:
            return state;
    }
};

export default beersReducer;
