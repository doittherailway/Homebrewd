import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


const receiveUser = (payload) => (
    {
        type: RECEIVE_USER,
        user: payload.user,
        checkins: payload.checkins
    }
);

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)), err => (
            dispatch(receiveUserErrors(err.responseJSON))
        ))
);