import { StyleSheet, Text, View } from "react-native";
import Calc from "./Calc";

export default function RPNCalc() {


  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <Text>123</Text>
      </View>
      <View style={styles.inputArea}>
        <Calc />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#84b9cb",
    },
    resultArea:{
        flex: 2,
        backgroundColor: "gray",
    },
    inputArea:{
        flex: 5,
        backgroundColor: "white",
    },
})