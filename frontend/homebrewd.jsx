import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchCheckins, fetchResourceCheckins, createCheckin } from './actions/checkin_actions';


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

    //testing remove later
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchCheckins = fetchCheckins;
    window.fetchResourceCheckins = fetchResourceCheckins;
    window.createCheckin = createCheckin;

    ReactDOM.render(<Root store={store} />, root);
});