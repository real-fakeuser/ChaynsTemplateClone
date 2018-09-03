import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './components/reducers';
import immutable from 'immutable';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

async function init() {

    if (__DEV__ || __STAGING__) {
        const installDevTools = require('immutable-Devtools');
        installDevTools(immutable);
    }

    const storeMiddleware = [thunk];

    if (__DEV__ || __STAGING__) {
        storeMiddleware.push(require('redux-logger').default);
    }

    const store = createStore(
        rootReducer,
        applyMiddleware(...storeMiddleware)
    );


    try {

        await chayns.ready;

        const tappElement = document.querySelector('.tapp');
        ReactDOM.render(
        <Provider store={store}>
            <App />  
        </Provider>, tappElement);

    } catch (err) {
        console.warn('no chayns environment found');
    }
    store.dispatch({type: "CHANGE_NAME", payload: "Test"})
}

init();
