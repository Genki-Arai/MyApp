import { StyleSheet, Text, View } from "react-native";
import Calc from "./Calc";
import OutputCalc from "./OutputCalc";
import React, { useState } from "react";

export default function RPNCalc() {
  const [formula, setFormula] = useState([]);
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <OutputCalc formula={formula} result={result} />
      </View>
      <View style={styles.inputArea}>
        <Calc setFormula={setFormula} setResult={setResult} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84b9cb",
  },
  resultArea: {
    flex: 2,
    backgroundColor: "gray",
  },
  inputArea: {
    flex: 5,
    backgroundColor: "white",
  },
});
