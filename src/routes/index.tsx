import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/pages/Home";
import Page404 from "@/pages/404";
import PageTodo from "@/pages/TodoList";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="todo"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="404" component={Page404}></Stack.Screen>
        <Stack.Screen name="todo" component={PageTodo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
