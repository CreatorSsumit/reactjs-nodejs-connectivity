import { RESET_STORE } from "../Constants/constant";
import { combineReducers } from "redux";

const appReducer = combineReducers({
    state:(state={})=>state
})

const resetStore = (state,action)=>{
    const {type} = action;
    switch (type) {
        case RESET_STORE:
             state = {};
             localStorage.removeItem('persist:root');
        default:
           return appReducer(state,action)
    }
}

export default resetStore