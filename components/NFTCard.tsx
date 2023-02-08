import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { assets } from "../constants";
import { CircleButton, RecButton } from "./Button";
import { SubInfo, ETHPrice, EndDate, ImageCmp, NFTTitle } from "./SubInfo";
import { useNavigation } from "@react-navigation/native";
import { ScreensNavigationProps } from "../ParamLists";

interface Props {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: number;
    bids: {
      id: string;
      name: string;
      price: number;
      image: number;
      date: string;
    }[];
  };
}

const NFTCard = ({ data }: Props) => {
  const navigation = useNavigation<ScreensNavigationProps>();
  function handlePress() {}
  data;
  return (
    <Pressable onPress={() => navigation.navigate("Details", { data })}>
      <View className="bg-gray-50 font-sm mb-9 shadow-md shadow-gray-300 rounded-3xl mx-3">
        <View className="w-full h-[250px]">
          <Image
            className="w-full h-full rounded-t-3xl"
            source={data.image}
            resizeMode="cover"
          />

          <CircleButton
            style={"right-3 top-3"}
            handlePress={handlePress}
            imageUrl={assets.heart}
          />
        </View>

        <SubInfo />
        <View className="w-full p-3">
          <NFTTitle subTitle={data.creator} title={data.name} />
          <View className="my-2 flex-row justify-between items-center">
            <ETHPrice price={data.price} />
            <RecButton
              handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NFTCard;
