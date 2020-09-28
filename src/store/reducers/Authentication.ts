import { Reducer } from "react";
import { AuthenticationActions } from "../actions";
import { AuthenticationState } from "../models";

const initialState: AuthenticationState = {
  isLogged: false,
};

const AuthReducer: Reducer<AuthenticationState, AuthenticationActions> = (
  state = initialState,
  action
) => {
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
