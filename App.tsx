import React, { useEffect, useState } from "react";
import { useFonts } from "@expo-google-fonts/inter";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors, screen } from "./globalVariable";
import Index from "./components/Index";
import Routes from "./components/Routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return <Routes></Routes>;
  }
}
