import { StatusBar } from "expo-status-bar";
import { queryClient, QueryClientProvider } from "@/api/queryClient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/pages/Home";
import Page404 from "@/pages/404";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="404" component={Page404}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
