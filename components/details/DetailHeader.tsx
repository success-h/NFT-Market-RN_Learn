import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreensNavigationProps } from "../../ParamLists";
import { NavigationProps } from "../../ParamLists";
import { CircleButton } from "../Button";
import { assets } from "../../constants";

export default function DetailHeader({ data: { name, image } }: DataProps) {
  const navigation = useNavigation<ScreensNavigationProps>();

  return (
    <View>
      <Image source={image} className="w-full h-[373px]" resizeMode="cover" />

      <CircleButton
        style={"left-3 top-14"}
        imageUrl={assets.left}
        handlePress={() => navigation.goBack()}
      />
      <CircleButton
        style={"right-3 top-14"}
        imageUrl={assets.heart}
        handlePress={() => navigation.goBack()}
      />
    </View>
  );
}
