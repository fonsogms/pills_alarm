import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Index from "./Index/Index";
import AddPill from "./AddPill/AddPill";
import * as SQLite from "expo-sqlite";
import { getDB } from "../DB";
import { PillsInterface } from "../pills.interface";
const Stack = createStackNavigator();
const Routes = () => {
  const [DB, setDB] = useState<SQLite.WebSQLDatabase>();
  useEffect(() => {
    if (!DB) {
      getDB(setDB);
    }
  }, [DB]);

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
          {(routeProps) => <Index {...routeProps} database={DB}></Index>}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Add Pill",
          }}
          name="Add_Pill"
        >
          {(routeProps) => <AddPill {...routeProps} database={DB}></AddPill>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
