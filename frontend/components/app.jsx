import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container';
import BeerIndexContainer from './beers/beerindex/beer_index_container';
import BeerShowContainer from './beers/beer_show_container';
import { AuthRoute, ProtectedRoute, AuthSlashRoute } from '../util/route_util';
import BeerEditContainer from './beers/beerform/beer_edit_container';
import BeerAddContainer from './beers/beerform/beer_add_container';
import UserProfileContainer from './users/user_profile_container';

const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthSlashRoute exact path="/" component={SplashContainer} /> 
            <ProtectedRoute exact path="/beers" component={BeerIndexContainer} />
            <ProtectedRoute exact path="/beers/new" component={BeerAddContainer} />
            <ProtectedRoute path="/beers/:beerId/edit" component={BeerEditContainer} />
            <ProtectedRoute path="/beers/:beerId" component={BeerShowContainer} />
            <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;