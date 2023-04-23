import { Button, StyleSheet, Text, View } from "react-native";
import { Counter } from "@/components";
import { Link } from "@react-navigation/native";

export default function PageHome() {
  return (
    <View style={styles.body}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Counter />
      <Link to={{ screen: "404" }}>
        to404
        {/* <Button title="to 404" /> */}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 10,
    // borderColor: "red",
  },
});
