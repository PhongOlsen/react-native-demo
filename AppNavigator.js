import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/Home";
import Products from "./screens/product/Products";
import ProductDetail from "./screens/product/ProductDetail";
import Cart from "./screens/cart/Cart";
import Login from "./screens/authentication/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home Screen" component={Home} />
    </HomeStack.Navigator>
  );
};

const CartStack = createNativeStackNavigator();

export const CartNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="Cart Screen" component={Cart} />
    </CartStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Tab 1" component={HomeNavigator} />
      <Tab.Screen name="Tab 2" component={CartNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
