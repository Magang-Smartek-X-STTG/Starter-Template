const initialState = {
  name: "Lionel Messi",
};

const globalState = (state = initialState, action) => {
  if (action.type === "SET_GLOBAL_STATE") {
    return action.value;
  }
  return state;
};

export default globalState;
