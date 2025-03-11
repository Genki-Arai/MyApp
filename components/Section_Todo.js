import { Button, FlatList, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const StatusbarHeight = Platform.OS === "ios" ? 44 : 56;

export default function Section_Todo() {
    const [todo, setTodo] = React.useState({
        todo:[
        {index: 1, title: "todo1", done: false},
        {index: 2, title: "todo2", done: false},
        {index: 3, title: "todo3", done: false}],
        currentIndex: 3,
    });
    const [inputText, setInputText] = React.useState("");

    const addTodo = () => {
        if(!inputText){
            return;
        }
        const newTodo = {
            index: todo.currentIndex + 1,
            title: inputText,
            done: false,
        };
        setTodo({
            todo: [...todo.todo, newTodo],
            currentIndex: todo.currentIndex + 1,
        })
        setInputText("");
    }


  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text>open Section_Todo.js!!</Text>
      </View>
      <ScrollView style={styles.todolist}>
        <Text>ScrollView</Text>
        <FlatList 
            data={todo.todo} 
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => "todo_" + item.index}
            ></FlatList>
      </ScrollView>
      <View style={styles.input}>
        <TextInput
            placeholder="Todoを入力してください"
            onChangeText={setInputText}
            value={inputText}
        ></TextInput>
        <Button title="追加" onPress={addTodo}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0a2c7",
    marginVertical: StatusbarHeight,
  },
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1,
  },
  input : {
    height: 30,
  }
});
