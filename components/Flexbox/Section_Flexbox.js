import { Platform, View } from "react-native";
import Flexbox_5_1 from "./Flexbox_5-1";
import Flexbox_5_2 from "./Flexbox_5-2";

export default function Section_Flexbox() {
    let paddingVertical = 0;
    if(Platform.OS === "ios") {
        paddingVertical = 44;
    } else if(Platform.OS === "android") {
        paddingVertical = 56;
    } else {
        paddingVertical = 0;
    }
  return (
    <View style={{ height: "100%", paddingVertical: paddingVertical }}>
      {/* Flexbox_5_1 /> */}
      <Flexbox_5_2 />
    </View>
  );
}
