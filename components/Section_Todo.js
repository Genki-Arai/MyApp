import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

// おそらく、StatusbarHeightがあるため、Web版で表示されない
const StatusbarHeight = Platform.OS === "ios" ? 44 : 56;

export default function Section_Todo() {
  const [todo, setTodo] = React.useState({
    todo: [
      { index: 1, title: "todo1", done: false },
      { index: 2, title: "todo2", done: false },
      { index: 3, title: "todo3", done: false },
    ],
    currentIndex: 3,
  });
  const [inputText, setInputText] = React.useState("");
  const [filterText, setFilterText] = React.useState("");
  const [todoList, setTodoList] = React.useState(todo.todo);

  const addTodo = () => {
    if (!inputText) {
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
    });
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  const filterTodo = () => {
    setTodoList(
      todo.todo.filter((todo) => {
        return todo.title.includes(filterText);
      })
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.filter}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            onChangeText={setFilterText}
            placeholder="Todoの検索"
            value={filterText}
          ></TextInput>
          <Button title="検索" onPress={filterTodo}></Button>
        </View>
      </View>
      <ScrollView style={styles.todolist}>
        <Text>ScrollView</Text>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <Text key={item.title + "_" + item.index}>{item.title}</Text>
          )}
          keyExtractor={(item, index) => "todo_" + item.index}
        ></FlatList>
        <TouchableOpacity>
          <Text>タップしてください</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput
          placeholder="Todoを入力してください"
          onChangeText={setInputText}
          value={inputText}
          style={styles.input}
        ></TextInput>
        <Button title="追加" onPress={addTodo}></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0a2c7",
    marginVertical: StatusbarHeight,
  },
  filter: {
    height: 50,
  },
  todolist: {
    flex: 1,
  },
  inputArea: {
    height: 40,
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    flex: 1,
  },
  button: {
    width: 30,
  },
});
