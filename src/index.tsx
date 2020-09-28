import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { Home } from "./screens/home";
import { AppState } from "./store/appState";
import { Login } from "./screens/Authentication";

const Stack = createStackNavigator();

interface Props {}

const AppStart = (props: Props) => {
  const { isLogged } = useSelector(
    (state: AppState) => state.AuthenticationState
  );
  if (!isLogged) return <Login />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStart;
