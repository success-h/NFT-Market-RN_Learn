import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  CompositeNavigationProp,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { RootStackParamList, ScreensNavigationProps } from "../ParamLists";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = ({}) => {
  useLayoutEffect(() => {}, []);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
