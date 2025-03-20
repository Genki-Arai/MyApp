import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CalcButton(props) {
  let flex = 1;
  if (props.flex) {
    flex = props.flex;
  }

  const styles = StyleSheet.create({
    btn: {
      // borderWidth: 1,
      // borderColor: "black",
      // fontSize: 50,
      //   backgroundColor: "yellow",
      //   borderWidth: 1,
      flex: flex,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      backgroundColor: "#a99e93",
    },
  });
  return (
    <TouchableOpacity style={styles.btn} onPress={props.buttonEvent}>
      <Text>{props.value}</Text>
    </TouchableOpacity>
  );
}
