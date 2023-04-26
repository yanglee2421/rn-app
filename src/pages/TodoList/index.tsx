import React, { useMemo, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  GestureResponderEvent,
} from "react-native";

export default function TodaList() {
  const [tasks, setTasks] = useState<string[]>(["Hello word"]);

  const tasksEl = useMemo(() => {
    return tasks.map((item) => {
      return (
        <View key={item} style={styles.item}>
          <Text>{item}</Text>
        </View>
      );
    });
  }, [tasks]);

  const [text, setText] = useState("");

  const handleAdd = (evt: GestureResponderEvent) => {
    setTasks((prev) => {
      const isExist = prev.includes(text);
      isExist ||
        React.startTransition(() => {
          setText("");
        });
      return isExist ? prev : [text, ...prev];
    });
  };

  return (
    <View style={styles.box}>
      <Text>Task Panel</Text>
      <View style={styles.header}>
        <TextInput value={text} onChangeText={setText} style={styles.input} />
        <Button onPress={handleAdd} title="add task" />
      </View>
      <View>
        <ScrollView>{tasksEl}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 16,
    backgroundColor: "#bfa",
  },
  header: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: "red",
  },
});
