import React from 'react';

import {View, Pressable} from 'react-native';

import Text from '../components/Text';

import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 40,
      }}>
      <View style={{width: 50, height: 50}}>
        {navigation.canGoBack() && (
          <Pressable
            style={({focused}) => [
              {
                borderWidth: 2,
                borderRadius: 10,
                borderColor: focused ? 'red' : undefined,
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 30}}>{'<-'}</Text>
          </Pressable>
        )}
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 50, fontWeight: '300'}}>Good morning, Eva</Text>
      </View>
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
    </View>
  );
};

export default Header;
