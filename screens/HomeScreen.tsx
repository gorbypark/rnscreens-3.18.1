import React from 'react';

import {View, PlatformColor} from 'react-native';

import Text from '../components/Text';

import Card from '../components/Card';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: PlatformColor('systemBackground'),
        padding: 40,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Card
            style={{marginBottom: 40, marginRight: 40}}
            onPress={() => navigation.navigate('Weather')}>
            <Text>40% chance of rain starting at 11AM</Text>
          </Card>
          <Card style={{marginRight: 40}}>
            <Text>Valenbisi</Text>
          </Card>
        </View>
        <View style={{flex: 1}}>
          <Card style={{marginBottom: 40}}>
            <Text>Radio</Text>
          </Card>
          <Card>
            <Text>Trafic?</Text>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
