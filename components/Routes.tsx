import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Index from "./Index/Index";
import AddPill from "./AddPill/AddPill";
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          options={{
            title: "Home",
          }}
          name="Home"
        >
          {(routeProps) => <Index {...routeProps}></Index>}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Add Pill",
          }}
          name="Add_Pill"
        >
          {(routeProps) => <AddPill {...routeProps}></AddPill>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
