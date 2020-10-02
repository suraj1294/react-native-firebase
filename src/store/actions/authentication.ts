import { Action } from "redux";
import firebase from "firebase";

/** Action:- Set Login Status */
const SET_LOGIN_STATUS = "Authentication/SET_LOGIN_STATUS";
interface SetLoginStatusAction extends Action<typeof SET_LOGIN_STATUS> {
  isLogging: boolean;
}
export const setLoginStatus = (isLogging: boolean): SetLoginStatusAction => {
  return {
    type: "Authentication/SET_LOGIN_STATUS",
    isLogging,
  };
};

/** Action:- Set Auth Status */
interface SetAuthUserAction extends Action<typeof SET_AUTH_USER> {
  user: firebase.User | null;
}
const SET_AUTH_USER = "Authentication/SET_AUTH_USER";
export const setAuthUser = (user: firebase.User | null): SetAuthUserAction => {
  return {
    type: "Authentication/SET_AUTH_USER",
    user,
  };
};
export type AuthenticationActions = SetLoginStatusAction | SetAuthUserAction;
