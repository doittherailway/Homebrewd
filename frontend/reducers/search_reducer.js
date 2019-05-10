import { RECEIVE_BEER_SEARCH } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_BEER_SEARCH:
            if (action.beers === undefined) {
                return {};
            } else {
                return action.beers;
            };
        default:
            return state;
    }
};

export default searchReducer;