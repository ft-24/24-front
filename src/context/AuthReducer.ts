import { AuthStateType, AuthActionType } from "./types";
import { INITIAL_STATE } from "./AuthContext";

const authReducer = (state : AuthStateType, action : AuthActionType) : AuthStateType => {
    switch (action.type) {
        case "LOGIN" :
            localStorage.setItem('token', action.payload);
            return {...state, token:action.payload};
        case "LOGOUT" :
            localStorage.removeItem('token');
            localStorage.removeItem('intra');
            localStorage.removeItem('nickname');
            localStorage.removeItem('session');
            return {...INITIAL_STATE, token: undefined};
        case "INTRA" :
            localStorage.setItem('intra', action.payload);
            return {...state, intra:action.payload};
        case "NICKNAME" :
            localStorage.setItem('nickname', action.payload);
            return {...state, nickname:action.payload};
        case "SESSION" :
            localStorage.setItem('session', action.payload);
            return {...state, socket_session:action.payload};
        default :
            return state;
    }
};

export default authReducer;