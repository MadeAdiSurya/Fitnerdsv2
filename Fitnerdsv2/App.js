import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FitnessContext } from "./screens/Context";
import AppLoading from "expo-app-loading";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Started from "./screens/Started";
import { useFonts } from "expo-font";
import WorkOut from "./screens/WorkOut";
import Splash from "./screens/Splash";
import RestScreen from "./screens/RestScreen";
import Training from "./screens/Training";
import Report from "./screens/Report";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    "bebas-neue": require("./assets/fonts/bebas-neue.ttf"),
    "bebas-neue-bold": require("./assets/fonts/bebas-neue-bold.ttf"),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <FitnessContext>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Started" component={Started} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="WorkOut" component={WorkOut} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Training" component={Training} />
          <Stack.Screen name="RestScreen" component={RestScreen} />
          <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
      </FitnessContext>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
