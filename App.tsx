import 'react-native/tvos-types.d';

import React from 'react';

import {PlatformColor, Pressable} from 'react-native';

import Text from './components/Text';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const SettingsButton = () => {
  return (
    <Pressable
      style={({focused}) => [
        {
          backgroundColor: focused ? 'red' : undefined,
          height: 60,
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text style={{fontSize: 50}}>⚙️</Text>
    </Pressable>
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  if (navigation.canGoBack()) {
    return (
      <Pressable
        onPress={() => navigation.goBack()}
        style={({focused}) => [
          {
            backgroundColor: focused ? 'red' : undefined,
            height: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={{fontSize: 50}}>{`<<`}</Text>
      </Pressable>
    );
  } else {
    return null;
  }
};

const App = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Good morning, Eva',
        headerTitleStyle: {fontSize: 30, color: PlatformColor('label')},
        headerStyle: {backgroundColor: PlatformColor('systemBackground')},
        headerLeft: () => <BackButton />,
        headerRight: () => <SettingsButton />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
};

export default App;
