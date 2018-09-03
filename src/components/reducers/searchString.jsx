import { createStore } from "redux";


let initialState = 'testString';
const searchString = (state = initialState, action) => {
    switch (action.type) {                  //Actions performed in local code logic
        case 'newInput':
            return state = action.payload.searchString;
        default:
            return state;
    }   
}
console.log('test');

//export default new searchString;
export default createStore(searchString, 'test');
