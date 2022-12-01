import { Dispatch } from "react";

export type AuthStateType = {
  token: string | undefined;
  user: string | undefined;
};

export type AuthActionType =
  | { type: "LOGIN", payload: string }
  | { type: "LOGOUT" }
  | { type: "INTRA", payload: string }

export type AuthDispatchType = Dispatch<AuthActionType>;
