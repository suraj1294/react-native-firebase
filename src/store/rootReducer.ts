import { combineReducers } from "redux";
import { AppState } from "./appState";
import { authentication } from "./reducers";

const rootReducer = combineReducers<AppState>({
  authentication,
});

export default rootReducer;
