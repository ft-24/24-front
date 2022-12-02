import { Dispatch } from "react";

export type AuthStateType = {
  token: string | undefined;
  intra: string | undefined;
  nickname: string | undefined;
};

export type AuthActionType =
  | { type: "LOGIN", payload: string }
  | { type: "LOGOUT" }
  | { type: "INTRA", payload: string }
  | { type: "NICKNAME", payload: string }

export type AuthDispatchType = Dispatch<AuthActionType>;
