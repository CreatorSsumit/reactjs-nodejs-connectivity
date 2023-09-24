import { combineReducers } from "redux";
import resetStore from "./resetStore";
import session from "./session";

export default combineReducers({
    session,
    resetStore
})