import { authenticationInitialState } from "./reducers/Authentication";

export const appInitialState = {
  authentication: authenticationInitialState,
};

export type AppState = typeof appInitialState;
