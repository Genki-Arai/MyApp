import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>こんにちは Expo</Text>
      <Button title="ボタン" onPress={() => alert("ボタンが押されました")} />
      <TextInput style={styles.input} placeholder="abcdefg"></TextInput>
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
  input:{
    backgroundColor: "#fff",
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
  }
});


