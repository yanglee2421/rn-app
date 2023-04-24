import { useMemo, useRef, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
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

  const inputRef = useRef<TextInput>(null);

  const handleAdd = (e: TextInput) => {};

  return (
    <View style={styles.box}>
      <Text>Task Panel</Text>
      <View style={styles.header}>
        <TextInput ref={inputRef} style={styles.input} />
        <Button title="add task" />
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
