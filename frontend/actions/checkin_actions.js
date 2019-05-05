import * as CheckinApiUtil from '../util/checkin_api_util';

export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const RECEIVE_CHECKIN_ERRORS = 'RECEIVE_CHECKIN_ERRORS';

const receiveCheckins = (checkins) => (
    {
        type: RECEIVE_ALL_CHECKINS,
        checkins
    }
);

const receiveCheckin = (checkin) => (
    {
        type: RECEIVE_CHECKIN,
        checkin
    }
);

export const receiveCheckinErrors = (errors) => (
    {
        type: RECEIVE_CHECKIN_ERRORS,
        errors
    }
);

export const fetchCheckins = () => (dispatch) => (
    CheckinApiUtil.fetchCheckins()
        .then(checkins => dispatch(receiveCheckins(checkins)), err => (
            dispatch(receiveCheckinsErrors(err.responseJSON))
        ))
);

export const fetchResourceCheckins = (resourceType, resourceId) => (dispatch) => (
    CheckinApiUtil.fetchResourceCheckins(resourceType, resourceId)
        .then(checkins => dispatch(receiveCheckins(checkins)), err => (
            dispatch(receiveCheckinErrors(err.responseJSON))
        ))   
);

export const createCheckin = (checkin) => (dispatch) => (
    CheckinApiUtil.createCheckin(checkin)
        .then(checkin => dispatch(receiveCheckin(checkin)), err => (
            dispatch(receiveCheckinErrors(err.responseJSON))
        ))
);