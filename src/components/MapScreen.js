import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from 'tailwind-react-native-classnames';

import Map from './Map';
import NavigateCard from './NavigateCard';
import RideOptionsCard from './RideOptionsCard';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const MapScreen = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
