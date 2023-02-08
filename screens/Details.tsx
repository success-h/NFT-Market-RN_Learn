import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import {
  CircleButton,
  DetailsBids,
  DetailsDesc,
  FocusedStatus,
  RecButton,
} from '../components';
import DetailHeader from '../components/details/DetailHeader';
import { SubInfo } from '../components/SubInfo';
import { NavigationProps } from '../ParamLists';

export const Details = ({ route, navigation }: NavigationProps<'Details'>) => {
  const { data } = route?.params;

  return (
    <View className="flex-1 bg-white">
      <View className="w-full absolute bottom-0 py-4 mb-7 items-center z-10">
        <RecButton handlePress={() => {}} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBids item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        className="pb-40"
        ListHeaderComponent={() => (
          <>
            <DetailHeader data={data} />
            <SubInfo />

            <View className="p-4">
              <DetailsDesc data={data} />
              <Text className="font-bold mt-2">Current Bids</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};
