import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    let user = state.entities.users[state.session.currentUserId];
    return ({
        currentUser: user
    });
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);