import { Reducer } from "redux";
import { AuthenticationActions } from "../actions";
import { AuthenticationState } from "../models";

export const authenticationInitialState: AuthenticationState = {
  isLogged: false,
};

const AuthReducer: Reducer<AuthenticationState, AuthenticationActions> = (
  state = authenticationInitialState,
  action
): AuthenticationState => {
  switch (action.type) {
    case "Authentication/SET_LOGIN":
      return {
        ...state,
        isLogged: action.isLogged,
      };
    default:
      return state;
  }
};
export default AuthReducer;
