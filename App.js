import { NavigationContainer } from "@react-navigation/native";
import AppNavigator, { HomeNavigator } from "./AppNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Screen name="Home" component={tabNavigator} /> */}
     {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home 1" component={AppNavigator} />
      </Stack.Navigator> */}
      <AppNavigator/>
    </NavigationContainer>
  );
}
