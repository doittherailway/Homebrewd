import {RECEIVE_ALL_BEERS, RECEIVE_BEER, REMOVE_BEER} from '../actions/beer_actions';

const beersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_BEERS:
            return action.beers;
        case RECEIVE_BEER:
            newState[action.beer.beer.id] = action.beer.beer;
            return newState;
        case REMOVE_BEER:
            delete newState[action.beerId];
            return newState;
        default:
            return state;
    }
};

export default beersReducer;