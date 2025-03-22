import { StyleSheet, Text, View, Dimensions } from "react-native";
import Calc from "./Calc";
import OutputCalc from "./OutputCalc";
import React, { useState } from "react";

export default function RPNCalc() {
  const [formula, setFormula] = useState([]);
  const [result, setResult] = useState(0);
  const [orientation, setOrientation] = useState("portrait");

  const getOrientation = (height, width) => {
    if (height > width) {
      return "portrait";
    }
    return "landscape";
  };

  const changeOperation = ({ window }) => {
    setOrientation(getOrientation(window.height, window.width));
  };

  React.useEffect(() => {
    Dimensions.addEventListener("change", changeOperation);

    return () => {
      Dimensions.removeEventListener("change", changeOperation);
    };
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#84b9cb",
    },
    resultArea: {
      flex: orientation === "portrait" ? 2 : 1,
      backgroundColor: "gray",
    },
    inputArea: {
      flex: orientation === "portrait" ? 5 : 1,
      backgroundColor: "white",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <OutputCalc formula={formula} result={result} />
      </View>
      <View style={styles.inputArea}>
        <Calc
          formula={formula}
          setFormula={setFormula}
          result={result}
          setResult={setResult}
        />
      </View>
    </View>
  );
}
