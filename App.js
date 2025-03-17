import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Platform } from "react-native";
import Compo from "./components/Compo";
import Section_Todo from "./components/Todo/Section_Todo";
import Section_Flexbox from "./components/Flexbox/Section_Flexbox";
import RPNCalc from "./components/Flexbox/RPNCalc";

export default function App() {
  let paddingVertical = 0;
  if (Platform.OS === "ios") {
    paddingVertical = 44;
  } else if (Platform.OS === "android") {
    paddingVertical = 56;
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Text>こんにちは Expo</Text>
    //   <Button title="ボタン" onPress={() => alert("ボタンが押されました")} />
    //   <TextInput style={styles.input} placeholder="abcdefg"></TextInput>
    //   <Compo />
    // </View>
    // <Section_Todo />
    <View style={{ height: "100%", paddingVertical: paddingVertical }}>
      {/* <Section_Flexbox /> */}
      <RPNCalc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
  },
});
