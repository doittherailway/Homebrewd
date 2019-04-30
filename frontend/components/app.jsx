import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Homebrewd</h1>
            <SplashContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;