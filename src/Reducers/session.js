import { REMOVE_SESSION, SAVE_SESSION, UPDATE_ACCESS_TOKEN, UPDATE_REFRESH_TOKEN, UPDATE_SESSION_USER } from "../Constants/constant"

const initialState={
user:{},
accessToken:"",
refreshToken :''
}

const session = (state=initialState,{type,payload})=>{
  switch (type) {
    case SAVE_SESSION:
        return {...state,...payload}
    case REMOVE_SESSION:
        return initialState
    case UPDATE_SESSION_USER:
        return {...state,user:{...payload}}
    case UPDATE_ACCESS_TOKEN:
        return {...state,accessToken:payload}            
    case UPDATE_REFRESH_TOKEN:
            return {...state,refreshToken:payload} 
    default:
       return state
 }

}

export default session