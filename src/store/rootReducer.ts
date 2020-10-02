import { combineReducers } from "redux";
import { AppState } from "./appState";
import { AuthReducer } from "./reducers";

const rootReducer = combineReducers<AppState>({
  authentication: AuthReducer,
});

export default rootReducer;
