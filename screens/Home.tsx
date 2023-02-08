import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";

interface HomeProps {}
import { NFTData } from "../constants";
import { HomeHeader, FocusedStatus, NFTCard } from "../components";
import { useState } from "react";

export const Home = ({}: HomeProps) => {
  const [inputData, setInput] = useState<NFTDataTypes>(NFTData);

  const handleSearch = (inputValue: string) => {
    if (!inputValue.length) return setInput(inputData);
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (filteredData.length) {
      setInput(filteredData);
    } else {
      setInput(NFTData);
    }
  };

  return (
    <View className="flex-1">
      <View className="flex-1 pt-12">
        <View className="z-10">
          <FlatList
            data={inputData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            // stickyHeaderIndices={[0]}
          />
        </View>

        <View className="absolute top-0 bottom-0 right-0 left-0 -z-10">
          <View className="h-[300px] bg-slate-900"></View>
          <View className="flex-1 bg-slate-100"></View>
        </View>
      </View>
    </View>
  );
};
