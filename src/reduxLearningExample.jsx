/*import { createStore } from "redux";


//Reducer           -->             Processes Actions return new state
const reducer = (state, action) => {  //State is the status of an entry in the database
    switch (action.type) {                  //Actions performed in local code logic
        case 'INC':
            return state + action.payload.incVal
        case 'DEC':
            return state - action.payload
        default:
            return state;
    }
}




//Initializing the store by passing the reducer function name and the default value
const store = createStore(reducer, 10);






//Define events which get executed at status update
store.subscribe(() => {
    console.log("Store changed ", store.getState())
})






//Dispatcher        -->         löst Änderung in der Datenbank aus
for (var i = 0; i < 10; i++) {
    store.dispatch({ type: 'INC', payload: {incVal: i }});          //passes an action to the shop-intern Reducer ## the action contains an action type and an action payload
}
for (var i = 0; i < 10; i++) {
    store.dispatch({ type: 'DEC', payload: i });                    //passes an action to the shop-intern Reducer ## the action contains an action type and an action payload
}*/

import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';



const reducer = (state={temp: null}, action) => {
    switch (action.type) {
        case "FETCH_USERS_START": {
            break;
        }
        case "FETCH_USERS_ERROR": {
            break;
        }
        case "RECEIVE_USERS": {
            break;
        }
        case "LAST_ONE": {
            state = {...state, temp: state.temp+action.payload}
            break;
        }
    }
    return state;
}



const store = createStore(reducer, applyMiddleware(logger))

store.subscribe(() => {
    console.log("store changeds!", store.getState())
})


store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });
store.dispatch({type: 'LAST_ONE', payload: 42 });



/*store.dispatch((dispatch) => {
    dispatch({ type: "FOO" })
//Hier unsynchrone Logik einbringen
/*        .then((response) => {
            dispatch({type: "RECEIVE_USERS, payload: response.data"})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USERS_ERROR", payload: err})
        })
    dispatch({ type: "BAR" })
})*/