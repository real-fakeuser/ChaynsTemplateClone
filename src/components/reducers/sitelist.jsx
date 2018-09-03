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


const initialState = {
    name: "",
    age: null 
}
const siteList = (state = initialState, action) => {
    let tState = state;
    switch (action.type) {
        case "CHANGE_NAME":
            tState = {...state, name: action.payload}
            break;
        case "CHANGE_AGE":
            tState = {...state, age: action.payload}
            break;
        default:
            return state;
    }
    return tState;
};

export default siteList;

