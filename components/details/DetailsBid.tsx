import { View, Text, Image } from "react-native";
import React from "react";
import { ETHPrice } from "../SubInfo";

type Props = {
  item: {
    id: string;
    name: string;
    price: number;
    image: number;
    date: string;
  };
};
export default function DetailsBids({ item }: Props) {
  const { date, id, image, name, price } = item;
  return (
    <View className="mx-4 my-2 flex-row justify-between items-center">
      <Image
        source={image}
        resizeMode="contain"
        className="w-[48px] h-[48px]"
      />

      <View className="">
        <Text className="font-bold self">Bid placed by {name}</Text>
        <Text className="text-xs">{date}</Text>
      </View>

      <ETHPrice price={price} />
    </View>
  );
}
