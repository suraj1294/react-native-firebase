import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { Home } from "./screens/home";
import { AppState } from "./store/appState";
import { Login } from "./screens/Authentication";
import { authenticationInitialState } from "./store/reducers/authentication";
import { initFirebase } from "./firebase";

initFirebase();

const Stack = createStackNavigator();

interface Props {}

const AppStart = (props: Props) => {
  const { user } = useSelector<AppState, typeof authenticationInitialState>(
    (state) => state.authentication
  );
  if (!user) return <Login />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStart;
