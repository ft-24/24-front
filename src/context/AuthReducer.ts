import { AuthStateType, AuthActionType } from "./types";

const authReducer = (state : AuthStateType, action : AuthActionType) : AuthStateType => {
    switch (action.type) {
        case "LOGIN" :
            localStorage.setItem('token', action.payload);
            return {...state, token:action.payload};
        case "LOGOUT" :
            localStorage.removeItem('token');
            localStorage.removeItem('intra');
            return {token: undefined, intra: undefined, nickname: undefined};
        case "INTRA" :
            localStorage.setItem('intra', action.payload);
            return {...state, intra:action.payload};
        case "NICKNAME" :
            localStorage.setItem('intra', action.payload);
            return {...state, nickname:action.payload};
        default :
            return state;
    }
};

export default authReducer;