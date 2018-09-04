import { List } from 'immutable';

const initialState = List();

const siteList = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LIST':
            return action.list
        default:
            return state;
    }
};

export default siteList;

