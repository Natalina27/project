const initialState = {
    token: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}
export default appReducer;