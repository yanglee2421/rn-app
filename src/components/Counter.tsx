import { useMemo, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { getBing } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function Counter() {
  const [count, setCount] = useState(0);
  const { data } = useQuery(["get-bing"], () => getBing());

  const imgEl = useMemo(() => {
    if (!data) return;
    return data.map((uri) => {
      return <Image key={uri} source={{ uri }} style={styles.img} />;
    });
  }, [data]);

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Bing gallery</Text>
      <View style={styles.imgBox}>{imgEl}</View>
      <View style={styles.counter}>
        <Text>Hello World {count}</Text>
        <Button onPress={() => setCount((prev) => prev + 1)} title="click" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  imgBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  img: {
    flex: 1,
    flexBasis: 100,
    height: 100,
  },
  counter: {
    borderWidth: 1,
    borderColor: "red",
    marginVertical: 20,
  },
});
