import { View, StyleSheet } from "react-native";
import CalcButton from "./CalcButton";
import ButtonLine from "./ButtonLine";

export default function Calc() {

  const buttons = [
    [{ value: "AC", flex: 2 }, { value: "C" }, { value: "+" }],
    [{ value: "7" }, { value: "8" }, { value: "9" }, { value: "-" }],
    [{ value: "4" }, { value: "5" }, { value: "6" }, { value: "×" }],
    [{ value: "1" }, { value: "2" }, { value: "3" }],
    [{ value: "0" }, { value: "." }, { value: "/" }],
    [{ value: "=" }],
  ];
  return (
    <View style={styles.container}>
      <View style={styles.buttonLine}>
        <ButtonLine buttons={buttons[0]} />
      </View>
      <View style={styles.buttonLine}>
        <ButtonLine buttons={buttons[1]} />
      </View>
      <View style={styles.buttonLine}>
        <ButtonLine buttons={buttons[2]} />
      </View>

      <View style={styles.buttonLineBottom2}>
        <View style={styles.button1to0}>
          <View style={styles.buttonLine}>
            <ButtonLine buttons={buttons[3]} />
          </View>
          <View style={styles.buttonLine}>
            <ButtonLine buttons={buttons[4]} />
          </View>
        </View>
        <View style={styles.equalButton}>
          <ButtonLine buttons={buttons[5]} />
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
  buttonLineBottom2: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  buttonLine: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    flexDirection: "row",
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
