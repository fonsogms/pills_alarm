import React, { useEffect, useState } from "react";
import { useFonts } from "@expo-google-fonts/inter";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RegisterBackgroundTask } from "./backgroundTask/backgroundTask";
import { colors, screen } from "./globalVariable";
import Index from "./components/Index";
import Routes from "./components/Routes";
import { registerTaskAsync } from "expo-background-fetch";
import { setPushNotifications } from "./pushFunc";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
  });
  useEffect(() => {
    //RegisterBackgroundTask();
    setPushNotifications();
  }, []);
  if (!fontsLoaded) {
    return null;
  } else {
    return <Routes></Routes>;
  }
}
