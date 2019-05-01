import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container';
import { AuthRoute, ProtectedRoute, AuthSlashRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <AuthSlashRoute exact path="/" component={SplashContainer} /> 
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;