import { Reducer } from "redux";
import { AuthenticationActions } from "../actions";
import { AuthenticationState } from "../models";

export const authenticationInitialState: AuthenticationState = {
  isLogging: false,
  user: null,
};

const AuthReducer: Reducer<AuthenticationState, AuthenticationActions> = (
  state = authenticationInitialState,
  action
): AuthenticationState => {
  switch (action.type) {
    case "Authentication/SET_LOGIN_STATUS":
      return {
        ...state,
        isLogging: action.isLogging,
      };
    case "Authentication/SET_AUTH_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default AuthReducer;
