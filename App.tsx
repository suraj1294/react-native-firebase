import * as React from "react";

import AppSafeAria from "./src/ui/app-safe-aria";
import { Provider } from "react-redux";
import { getStore } from "./src/store";
import AppStart from "./src";

const store = getStore();

const App = () => {
  return (
    <AppSafeAria>
      <Provider store={store}>
        <AppStart />
      </Provider>
    </AppSafeAria>
  );
};

export default App;
