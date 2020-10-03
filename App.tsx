import * as React from "react";
import { useEffect } from "react";
import { Root } from "native-base";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppSafeAria from "./src/ui/app-safe-aria";
import { Provider } from "react-redux";
import { getStore } from "./src/store";
import AppStart from "./src";

const store = getStore();

const App = () => {
  const [isAppLoaded, setAppLoading] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    setAppLoading(true);
  };

  useEffect(() => {
    if (!isAppLoaded) loadFonts();
  }, []);
  if (!isAppLoaded)
    return (
      <Root>
        <AppLoading />
      </Root>
    );
  else
    return (
      <Root>
        <AppSafeAria>
          <Provider store={store}>
            <AppStart />
          </Provider>
        </AppSafeAria>
      </Root>
    );
};

export default App;
