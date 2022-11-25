import { AuthStateType, AuthActionType } from "./types";

const authReducer = (state : AuthStateType, action : AuthActionType) : AuthStateType => {
    switch (action.type) {
        case "LOGIN" :
            localStorage.setItem('token', action.payload);
            return {...state, token:action.payload};
        case "LOGOUT" :
            localStorage.removeItem('token');
            return {token: undefined, user:undefined};
        default :
            return state;
    }
};

export default authReducer;