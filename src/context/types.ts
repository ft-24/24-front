import { Dispatch } from "react";

export type User = {
  name: string;
};

export type AuthStateType = {
  token: string | undefined;
  user: User | undefined;
};

export type AuthActionType =
  | { type: "LOGIN", payload: string }
  | { type: "LOGOUT" };

export type AuthDispatchType = Dispatch<AuthActionType>;
