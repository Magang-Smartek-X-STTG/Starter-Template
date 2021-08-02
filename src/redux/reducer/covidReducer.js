const initialState = {};

export const covidState = (state = initialState, action) => {
  if (action.type === "SET_DATA_COVID") {
    return action.value;
  }
  return state;
};

export default covidState;
