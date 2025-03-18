import { View, StyleSheet } from "react-native";
import NumButton from "./NumButton";
import OperatorButton from "./OperatorButton";

export default function Calc() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonLineTop3}>
        <View style={styles.buttonLayer}>
          <OperatorButton flexGrow="2" operator="AC" />
          <OperatorButton operator="C" />
          <OperatorButton operator="+" />
        </View>
        <View style={styles.buttonLayer}>
          <NumButton number="7" />
          <NumButton number="8" />
          <NumButton number="9" />
          <OperatorButton operator="-" />
        </View>
        <View style={styles.buttonLayer}>
          <NumButton number="4" />
          <NumButton number="5" />
          <NumButton number="6" />
          <OperatorButton operator="×" />
        </View>
      </View>
      <View style={styles.buttonLineBottom2}>
        <View style={styles.button1to0}>
          <View style={styles.buttonLayer}>
            <NumButton number="1" />
            <NumButton number="2" />
            <NumButton number="3" />
          </View>
          <View style={styles.buttonLayer}>
            <NumButton number="0" />
            <OperatorButton operator="." />
            <OperatorButton operator="/" />
          </View>
        </View>
        <View style={styles.equalButton}>
          <OperatorButton operator="=" />
        </View>
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
  buttonLineTop3: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
  },
  buttonLineBottom2: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  buttonLayer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    // borderColor: "black",
  },
  equalButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  button1to0: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  
});

{
  /** 
    [          ]
    [          ]
    [          ]
    [ AC ][C][+]
    [7][8][9][-]
    [4][5][6][*]
    [1][2][3][=]
    [0][.][/][=]
*/
}
