import { globalState } from "./globalReducer";
import { covidState } from "./covidReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    globalState,
    covidState
});

export default reducer;