import React, {ReactChild} from 'react';

import {Pressable, ViewStyle, PlatformColor} from 'react-native';

interface ICard {
  children?: ReactChild;
  style?: ViewStyle;
  onPress?: () => void;
}

const Card = ({children, style, onPress}: ICard) => {
  return (
    <Pressable
      onPress={onPress}
      style={({focused}) => [
        {
          flex: 1,
          backgroundColor: PlatformColor('tertiarySystemBackground'),
          borderRadius: 20,
          borderWidth: 5,
          borderColor: focused ? 'blue' : 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      {children}
    </Pressable>
  );
};

export default Card;
