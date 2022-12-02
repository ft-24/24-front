import { createContext, useReducer } from "react";
import { AuthStateType, AuthDispatchType } from "./types";
import authReducer from './AuthReducer'

export const INITIAL_STATE: AuthStateType = {
  token: localStorage.getItem('token') || undefined,
  intra: undefined,
  nickname: undefined,
  socket_session: undefined,
};

export const AuthContext = createContext<AuthStateType>(INITIAL_STATE);
export const AuthDispatchContext = createContext<AuthDispatchType | null>(null);

export const AuthContextProvider = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={state}>
    <AuthDispatchContext.Provider value={dispatch}>
      {children}
    </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};