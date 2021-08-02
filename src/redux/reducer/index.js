import { combineReducers } from "redux";
import globalState from "./globalReducer";
import { covidState } from "./covidReducer";

const reducer = combineReducers({
  globalState,
  covidState,
});

export default reducer;
