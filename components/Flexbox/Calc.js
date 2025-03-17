import { View, StyleSheet } from "react-native";
import NumButton from "./NumButton";
import OperatorButton from "./OperatorButton";

export default function Calc() {
  return (
    <View style={styles.container}>
        <View style={styles.num9to7}>
            <OperatorButton flex="2" operator="AC" />
            <OperatorButton flex="1" operator="C" />
            <OperatorButton flex="1" operator="+" />
        </View>
      <View style={styles.num9to7}>
        <NumButton number="7" />
        <NumButton number="8" />
        <NumButton number="9" />
        <OperatorButton operator="-" />
      </View>
      <View style={styles.num6to4}>
        <NumButton number="4" />
        <NumButton number="5" />
        <NumButton number="6" />
        <OperatorButton operator="×" />
      </View>
      <View style={styles.num3to1}>
        <NumButton number="1" />
        <NumButton number="2" />
        <NumButton number="3" />
        <OperatorButton operator="÷" />
      </View>
      <View style={styles.num3to1}>
        <NumButton number="0" />
        <OperatorButton operator="." />
        <OperatorButton operator="+/-" />
        <OperatorButton operator="=" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#84b9cb",
  },
  num9to7: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
  },
  num6to4: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  num3to1: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  num0: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
