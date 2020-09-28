import React, { FC } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
const AppSafeAria: FC<{}> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {children}
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default AppSafeAria;
