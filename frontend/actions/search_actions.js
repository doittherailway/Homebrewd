import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_BEER_SEARCH = 'RECEIVE_BEER_SEARCH';

const receiveBeerSearch = (payload) => {
    debugger;
    return({
        type: RECEIVE_BEER_SEARCH,
        beers: payload.beers
    });
};

// const receiveBeers = (payload) => (
//     {
//         type: RECEIVE_ALL_BEERS,
//         beers: payload.beers,
//         breweries: payload.breweries,
//         checkins: payload.checkins
//     }
// );

export const fetchResults = (query) => (dispatch) => (
    SearchApiUtil.searchBeers(query)
        .then(payload => dispatch(receiveBeerSearch(payload)), err => (
            dispatch(receiveBeerErrors(err.responseJSON))
        ))
);