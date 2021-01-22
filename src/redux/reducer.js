const initialState = {
    token: '',
    user: {}
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'SAVE_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
export default appReducer;