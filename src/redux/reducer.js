import {types} from "./types";

const initialState = {
    token: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_TOKEN:
            return {...state, token: action.payload}
        case types.SAVE_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}
export default appReducer;