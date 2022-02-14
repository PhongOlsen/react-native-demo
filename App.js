import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthenProvider } from "./contexts/AuthenContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <AuthenProvider>
      <SafeAreaProvider fallback={<Text>Loading...</Text>}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthenProvider>
  );
}
