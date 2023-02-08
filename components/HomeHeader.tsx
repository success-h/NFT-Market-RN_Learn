import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps, ScreensNavigationProps } from "../ParamLists";

const HomeHeader = ({
  onSearch,
}: {
  onSearch: (inputValue: string) => void;
}) => {
  return (
    <View className="bg-gray-900 p-4 fixed top-0">
      <View className="flex-row justify-between items-center">
        <Image
          resizeMode="contain"
          source={assets.logo}
          className="w-[90px] h-[25px]"
        />
        <View className="w-[45px] h-[45px]">
          <Image
            source={assets.person01}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
      </View>
      <View className="my-2">
        <Text className="text-white text-xs">Hello Success👋</Text>
        <Text className="text-white text-lg font-semibold">
          Let's find a master peace
        </Text>
      </View>
      <View className="mt-2 w-full rounded-lg flex-row items-center bg-[#f4f3f350] px-3">
        <Image
          source={assets.search}
          className="h-[20px] w-[20px] mr-2"
          resizeMode="contain"
        />
        <TextInput
          placeholder="Search NFTs"
          placeholderTextColor="white"
          className="text-white py-2 w-full bg-opacity-25"
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
