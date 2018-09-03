import React from 'react'
import store from '../components/reducers';
import ReactDOM from  'react-dom'
//import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import rootReducer from '../components/reducers';
import immutable from 'immutable';
import { Provider } from 'react-redux';
 import thunk from 'redux-thunk';
 import { createStore, applyMiddleware } from 'redux';


export default class TestScript extends React.Component {
    constructor(props) {

        super();
        if (__DEV__ || __STAGING__) {
            const installDevTools = require('immutable-devtools');
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
    
        this.props = props;
        this.render();
        this._test();
    }

    _test = () => {

        store.subscribe(() => {
            console.log("store changeds!", store.getState())
        })
        console.log("teste##########################");
        store.dispatch({type: "CHANGE_NAME", payload: "Test"});
        store.dispatch({type: "CHANGE_AGE", payload: 19});
        store.dispatch({type: "CHANGE_NAME", payload: "Hans"});
        store.dispatch({type: "CHANGE_AGE", payload: 30});
        store.dispatch({type: "CHANGE_NAME", payload: "Gerd"});
        store.dispatch({type: "CHANGE_AGE", payload: 33});


        //store
    }



    render = () => {
        <Provider store={store}>
            {console.log("teste##########################")}
        </Provider>, tappElement
        
    }
    
    





};