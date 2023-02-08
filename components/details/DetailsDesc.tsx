import { View, Text } from "react-native";
import React, { useState } from "react";
import { ETHPrice, NFTTitle } from "../SubInfo";

export default function DetailsDesc({ data }: DataProps) {
  const [readMore, setReadMore] = useState(false);
  const { price, name, creator, description } = data;
  const [text, setText] = useState<string>(description.slice(0, 130));
  return (
    <>
      <View className="w-full flex-row justify-between items-center">
        <NFTTitle subTitle={creator} title={name} />

        <ETHPrice price={price} />
      </View>

      <View className="my-4">
        <Text className="font-semibold ">Description</Text>
        <View className="mt-4">
          <Text className="font-regular text-gray-500">
            {text}
            {!readMore && "..."}
            <Text
              onPress={() => {
                if (!readMore) {
                  setText(description);
                  setReadMore(true);
                } else {
                  setText(description.slice(0, 100));
                  setReadMore(false);
                }
              }}
              className="font-bold text-black"
            >
              {readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
