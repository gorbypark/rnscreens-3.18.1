import React from 'react';

import {View, PlatformColor} from 'react-native';

import Text from '../components/Text';

import Header from '../components/Header';
import Card from '../components/Card';

const WeatherScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: PlatformColor('systemBackground'),
        padding: 40,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Card>
          <Text>Weather...</Text>
        </Card>
      </View>
    </View>
  );
};

export default WeatherScreen;
