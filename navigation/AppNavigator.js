import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Business from "../screens/business/Business";
import Home from "../screens/home/Home";
import Message from "../screens/message/Message";
import Account from "../screens/account/Account";
import COLORS from "../consts/color";
import Splash from "../screens/splash-screen/Splash";
import Login from "../screens/authentication/Login";
import { AuthContext } from "../contexts/AuthenContext";

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

const BusinessStack = createNativeStackNavigator();

export const BusinessNavigator = () => {
  return (
    <BusinessStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BusinessStack.Screen name="Business Screen" component={Business} />
    </BusinessStack.Navigator>
  );
};

const MessStack = createNativeStackNavigator();

export const MessNavigator = () => {
  return (
    <MessStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MessStack.Screen name="Message Screen" component={Message} />
    </MessStack.Navigator>
  );
};

const SplashStack = createNativeStackNavigator();

export const SplashNavigator = () => {
  return (
    <SplashStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SplashStack.Screen name="Splash Screen" component={Splash} />
    </SplashStack.Navigator>
  );
};
const AccountStack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen name="Account Screen" component={Account} />
    </AccountStack.Navigator>
  );
};

const AuthenStack = createNativeStackNavigator();

export const AuthenNavigate = () => {
  return (
    <AuthenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenStack.Screen name="Login Screen" component={Login} />
    </AuthenStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isLogined } = useContext(AuthContext);
  return (
    <>
      {isLogined ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Business") {
                iconName = focused ? "business" : "business-outline";
              } else if (route.name === "Message") {
                iconName = focused
                  ? "chatbubble-ellipses"
                  : "chatbubble-ellipses-outline";
              } else if (route.name === "Account") {
                iconName = focused ? "person" : "person-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.green,
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Business" component={BusinessNavigator} />
          <Tab.Screen name="Message" component={MessNavigator} />
          <Tab.Screen name="Account" component={AccountNavigator} />
        </Tab.Navigator>
      ) : (
        <AuthenNavigate />
      )}
    </>
  );
};

export default AppNavigator;
