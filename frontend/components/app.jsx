import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container';
import { AuthRoute, ProtectedRoute, AuthSlashRoute } from '../util/route_util';

const App = () => (
    <div>
        <AuthSlashRoute path="/" component={SplashContainer} /> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;