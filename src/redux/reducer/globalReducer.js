const initialState = {
    name: 'Lionel Messi'
}

export const globalSatate = (state = initialState, action) => {
    if(action.type === 'SET_GLOBAL_STATE') {
        return action.value
    }
    return state;
}