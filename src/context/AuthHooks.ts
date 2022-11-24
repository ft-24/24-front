import { useContext } from "react";
import { AuthContext, AuthDispatchContext } from "./AuthContext"

export function useAuthState () {
    const state = useContext(AuthContext);
    if (!state) throw new Error();
    return state
}

export function useAuthDispatch () {
    const dp = useContext(AuthDispatchContext);
    if (!dp) throw new Error();
    return dp
}