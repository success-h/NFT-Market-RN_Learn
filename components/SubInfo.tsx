import { View, Text, Image } from "react-native";
import { assets } from "../constants";

export function NFTTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <View>
      <Text className="text-xl font-bold">{title}</Text>
      <Text className="text-xs text-gray-800">{subTitle}</Text>
    </View>
  );
}
export function ETHPrice({ price }: { price: number }) {
  return (
    <View className="flex-row items-center">
      <Image
        source={assets.eth}
        resizeMode="contain"
        className="h-[20px] w-[20px]"
      />
      <Text className="font-semibold text-sm">{price}</Text>
    </View>
  );
}
export function ImageCmp({ imgeUrl }: { imgeUrl: number; index: number }) {
  return (
    <Image
      className="w-[48px] h-[48px] -ml-3"
      source={imgeUrl}
      resizeMode="contain"
      resizeMethod="auto"
    />
  );
}
export function EndDate() {
  return (
    <View
      className="items-center justify-center
     px-3 py-1 text-xs bg-white shadow"
    >
      <Text className="text-xs ">Ending in</Text>
      <Text className="font-bold text-sm">12h 30m</Text>
    </View>
  );
}

export function People() {
  return (
    <View className="flex-row ml-3">
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp key={`People - ${imgUrl}`} index={index} imgeUrl={imgUrl} />
        )
      )}
    </View>
  );
}

export function SubInfo() {
  return (
    <View className="w-full mb-4  -mt-7 px-2 flex-row justify-between">
      <People />
      <EndDate />
    </View>
  );
}
