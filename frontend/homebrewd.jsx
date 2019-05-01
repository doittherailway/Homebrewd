import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

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
    window.getState = store.getState;
    window.logout = logout;

    ReactDOM.render(<Root store={store} />, root);
});