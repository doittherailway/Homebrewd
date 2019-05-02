import { RECEIVE_BEER_ERRORS, RECEIVE_BEER, RECEIVE_ALL_BEERS } from '../actions/beer_actions';

const beerErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BEER_ERRORS:
            return action.errors;
        case RECEIVE_ALL_BEERS:
            return [];
        case RECEIVE_BEER:
            return [];
        default:
            return state;
    }
};

export default beerErrorsReducer;