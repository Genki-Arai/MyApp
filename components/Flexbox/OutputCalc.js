import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function OutputCalc(props) {
  let formula;

  if (props.formula.length < 1) {
  } else {
    for (let i = 0; i < props.formula.length; i++) {
      if (i === 0) {
        formula = String(props.formula[i]);
      } else {
        formula += String(props.formula[i]);
      }
    }
  }

  return (
    <React.Fragment>
      <View style={styles.outputArea}>
        {formula ? <Text>{formula}</Text> : <Text>0</Text>}
      </View>
      <View style={styles.outputArea}>
        <Text>{props.result}</Text>
        <Text>{props.formula.length}</Text>
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
  },
});
