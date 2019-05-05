import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN } from '../actions/checkin_actions';

const checkinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_CHECKINS:
            return action.checkins;
        case RECEIVE_CHECKIN:
            newState[action.checkin.id] = action.checkin;
            return newState;
        default:
            return state;
    }

};

export default checkinsReducer;