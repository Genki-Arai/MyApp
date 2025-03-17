import React from "react";
import { StyleSheet, View } from "react-native";

export default function Flexbox_5_2() {
  return (
    <View
      style={styles.sample_5_7}
    >
      <View style={{height: 50, width: 50 , backgroundColor: "green" }}></View>
      <View style={{ height: 50 , backgroundColor: "blue" }}></View>
      <View style={{ height: 50, width: 10, backgroundColor: "yellow" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    sample_5_5:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    sample_5_6:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    sample_5_7:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
});

// ■justifyContent
// start: 子要素をコンテナの開始位置に配置します。
// center: 子要素をコンテナの中央に配置します。
// end: 子要素をコンテナの終了位置に配置します。
// space-around: 子要素の周りに均等なスペースを配置します。
// space-between: 子要素の間に均等なスペースを配置します。
// space-evenly: 子要素の周りと間に均等なスペースを配置します。
// left: 子要素をコンテナの左端に配置します。
// right: 子要素をコンテナの右端に配置します。
// stretch: 子要素をコンテナに合わせて伸縮させます。

// ■alignItems

