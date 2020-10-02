import { authenticationInitialState } from "./reducers";

export const appInitialState = {
  authentication: authenticationInitialState,
};

export type AppState = typeof appInitialState;
