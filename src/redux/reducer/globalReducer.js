const initialState = {
    name: 'Lionel Messi'
}

export const globalState = (state = initialState, action) => {
    if(action.type === 'SET_GLOBAL_STATE') {
        return action.value
    }
    return state;
}