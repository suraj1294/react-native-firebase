import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AppState } from "./store/appState";
import { Login } from "./screens/Authentication";
import { authenticationInitialState } from "./store/reducers/authentication";
import { initFirebase } from "./firebase";
import AppBottomTab from "./screens/app";

initFirebase();

interface Props {}

const AppStart = (props: Props) => {
  const { user } = useSelector<AppState, typeof authenticationInitialState>(
    (state) => state.authentication
  );
  if (!user) return <Login />;
  return (
    <NavigationContainer>
      <AppBottomTab />
    </NavigationContainer>
  );
};

export default AppStart;
