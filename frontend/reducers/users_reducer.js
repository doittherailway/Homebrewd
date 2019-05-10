import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN } from '../actions/checkin_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object. assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        case RECEIVE_ALL_CHECKINS:
            if (action.users !== undefined) {
            Object.values(action.users).map(user => {
                newState[user.id] = user
            });}
            return newState;
        case RECEIVE_CHECKIN:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
};

export default usersReducer;