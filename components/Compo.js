import { ViewComponent, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Compo() {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
        <Text style={styles.cell}>コンポーネント</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  cell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
});
