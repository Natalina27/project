import {types} from './types';

const initialState = {
    token: ''
}

const appReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SAVE_TOKEN:
            return {...state, token: payload}
        case types.SAVE_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}
export default appReducer;