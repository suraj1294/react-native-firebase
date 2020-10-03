import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppState } from "./store/appState";
import { ForgotPassword, Login, SignUp } from "./screens/Authentication";
import { authenticationInitialState } from "./store/reducers/authentication";
import { initFirebase } from "./firebase";
import AppBottomTab from "./screens/app";

initFirebase();

interface Props {}

const AuthStack = createStackNavigator();

const AppStart = (props: Props) => {
  const { user } = useSelector<AppState, typeof authenticationInitialState>(
    (state) => state.authentication
  );
  if (!user)
    return (
      <NavigationContainer>
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="SignUp" component={SignUp} />
          <AuthStack.Screen name="Forgot" component={ForgotPassword} />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <AppBottomTab />
      </NavigationContainer>
    );
};

export default AppStart;
