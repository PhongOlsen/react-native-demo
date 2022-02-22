import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthenProvider } from "./contexts/AuthenContext";
import { CartProvider } from "./contexts/CartContext";
import { DemoProvider } from "./contexts/DemoContext";
import { HomeProvider } from "./contexts/HomeContext";
import { ProductProvider } from "./contexts/ProductContext";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <HomeProvider>
      <AuthenProvider>
        <ProductProvider>
          <CartProvider>
            <DemoProvider>
              <SafeAreaProvider fallback={<Text>Loading...</Text>}>
                <NavigationContainer>
                  <AppNavigator />
                </NavigationContainer>
              </SafeAreaProvider>
            </DemoProvider>
          </CartProvider>
        </ProductProvider>
      </AuthenProvider>
    </HomeProvider>
  );
}
