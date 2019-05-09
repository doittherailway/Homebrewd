import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/checkin_actions';
import { RECEIVE_USER } from '../actions/user_actions';
// import { RECEIVE_BEER } from '../actions/beer_actions';

const checkinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_CHECKINS:
            return action.checkins;
        case RECEIVE_CHECKIN:
            newState[action.checkin.id] = action.checkin;
            return newState;
        // case RECEIVE_BEER:
        // debugger
        //     return action.checkins;
        case REMOVE_CHECKIN:
            delete newState[action.checkinId];
            return newState;
        // case RECEIVE_USER:
        //     Object.values(action.checkins).map(checkin => {
        //         newState[checkin.id] = checkin
        //     });
        default:
            return state;
    }

};

export default checkinsReducer;