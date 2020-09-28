import { Action } from "redux";

export const SET_LOGIN = "Authentication/SET_LOGIN";

interface SetAuthenticationActions extends Action<typeof SET_LOGIN> {
  isLogged: boolean;
}

export const setLogin = (isLogged: boolean): SetAuthenticationActions => {
  return {
    type: "Authentication/SET_LOGIN",
    isLogged,
  };
};

export type AuthenticationActions = SetAuthenticationActions;
