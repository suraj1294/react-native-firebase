import { combineReducers } from "redux";
import { AuthReducer } from "./reducers";

const rootReducer = combineReducers({
  AuthenticationState: AuthReducer,
});

export default rootReducer;
