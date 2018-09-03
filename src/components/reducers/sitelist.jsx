import { List } from 'immutable';
/*export default userReducers = (state=[], action) => {
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name: action.payload}
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload}
            break;
        }
    }
    return state;
};
*/


const initialState = List();

const siteList = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LIST':
            return action.list
        case "CHANGE_AGE":
            return {age: action.payload, name: state.name}
        default:
            return state;
    }
};

export default siteList;

