import React, {ReactChild} from 'react';

import {Text as RNText, PlatformColor, TextStyle} from 'react-native';

interface IText {
  style?: TextStyle;
  children?: ReactChild;
}
const Text = ({style, children}: IText) => {
  return (
    <RNText style={[{color: PlatformColor('label')}, style]}>{children}</RNText>
  );
};

export default Text;
