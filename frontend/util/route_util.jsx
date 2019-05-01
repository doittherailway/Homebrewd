import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import NavbarContainer from '../components/navbar/navbar_container';

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

const AuthSlash = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <NavbarContainer />
            )
    )} />
);

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
)



export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AuthSlashRoute = withRouter(connect(mapStateToProps, null)(AuthSlash))