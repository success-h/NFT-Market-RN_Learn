import { Image, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  imageUrl: number;
  handlePress: () => void;
  style: string;
}
interface RecButtonProps {
  handlePress: () => void;
}

export const CircleButton = ({ imageUrl, handlePress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`z-30 w-[40px] h-[40px] bg-white absolute rounded-full 
    items-center justify-center shadow-md ${style} `}
      onPress={handlePress}
    >
      <Image
        source={imageUrl}
        resizeMode={"contain"}
        className="w-[24px] h-[24px]"
      />
    </TouchableOpacity>
  );
};

export const RecButton = ({ handlePress }: RecButtonProps) => {
  return (
    <TouchableOpacity className="" onPress={handlePress}>
      <View className=" rounded-full bg-gray-900 px-5 py-2 ">
        <Text className="text-white text-lg">Place a bid</Text>
      </View>
    </TouchableOpacity>
  );
};
