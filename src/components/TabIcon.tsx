import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {ICONS} from '../utils/constant';
import {style} from './Style';
type TabIconProps = {
  source: ImageSourcePropType;
  text: string;
};
const TabIcon = ({source, text}: TabIconProps) => {
  return (
    <View style={style.cTab}>
      <Image source={source} style={style.cTabIcons} />
      <Text style={style.cText}>{text}</Text>
    </View>
  );
};

export default TabIcon;
