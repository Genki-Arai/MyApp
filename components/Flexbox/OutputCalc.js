import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function OutputCalc(props) {
  return (
    <React.Fragment>
      <View style={styles.outputArea}>
        <Text>{props.formula}</Text>
      </View>
      <View style={styles.outputArea}>
        <Text>{props.result}</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
    outputArea: {
        flex: 1,
        backgroundColor: "#b9d08b",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    }
})