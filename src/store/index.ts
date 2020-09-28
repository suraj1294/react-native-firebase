import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};
