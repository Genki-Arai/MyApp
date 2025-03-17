import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Section_Todo_Conpo(props) {
    
    let textStyle;

    if(props.done){
        textStyle = styles.todoIsDone;
    } else {
        textStyle = styles.todoIsNotDone;
    }



  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={textStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    todoIsDone:{
        backgroundColor: "#80989b",
        fontSize: 20,
        opacity: 0.5,
    },
    todoIsNotDone:{
        color: "#000000",
        fontSize: 20,
    }
    
});