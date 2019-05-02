import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {fetchBeers, fetchBeer, createBeer, updateBeer, deleteBeer} from './actions/beer_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {
                currentUserId: window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    else {
        store = configureStore();
    }

    //Testing, remove later
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
   

    ReactDOM.render(<Root store={store} />, root);
});