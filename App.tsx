import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./navigator/RootNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        translucent
        style="light"
        backgroundColor="#000"
        animated={true}
      />
      <RootNavigator />
    </NavigationContainer>
  );
}
