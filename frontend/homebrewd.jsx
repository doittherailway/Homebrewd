import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createCheckin, fetchResourceCheckins, fetchCheckins } from './util/checkin_api_util';

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

    //Remove after testing
    window.createCheckin = createCheckin;
    window.fetchResourceCheckins = fetchResourceCheckins;
    window.fetchCheckins = fetchCheckins;

    ReactDOM.render(<Root store={store} />, root);
});