import { View, Text, StyleSheet, Platform } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const headerHeight = Platform.OS === "ios" ? 44 : 56;

export default function Todo() {
  return (
    <View style={styles.container}>
      <View style={styles.outputSpace}>
        <View style={styles.header}>
          <Text>フィルタ入力</Text>
        </View>
        <Text>
          <Text>Todo123</Text>
        </Text>
        <Text>Todo</Text>

        <View style={styles.footer}>
          <Text>フッター</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c4f54",
    height: "100%",
    width: "100%",
  },
  outputSpace: {
    backgroundColor: "#e0ebaf",
    marginTop: headerHeight,
    marginBottom: 10,
    marginHorizontal: 10,
    // borderRadius: "5%",
  },
  header: {
    backgroundColor: "#ffff10",
    alignSelf: "stretch",
    height: "10%",
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "#ffff10",
    alignSelf: "stretch",
    height: "10%",
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
