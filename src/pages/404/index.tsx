import { Button, StyleSheet, Text, View } from "react-native";
import { useLinkTo } from "@react-navigation/native";

export default function Page404() {
  const linkTo = useLinkTo();

  return (
    <View style={styles.box}>
      <Text>404</Text>
      <Button onPress={() => linkTo("/Home")} title="Take me home" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
