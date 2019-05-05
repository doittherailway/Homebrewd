import { RECEIVE_CHECKIN_ERRORS, RECEIVE_CHECKIN, RECEIVE_ALL_CHECKINS } from '../actions/checkin_actions';

const checkinErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHECKIN_ERRORS:
            return action.errors;
        case RECEIVE_ALL_CHECKINS:
            return [];
        case RECEIVE_CHECKIN:
            return [];
        default:
            return state;
    }
};

export default checkinErrorsReducer;