import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/constant';

export const style = StyleSheet.create({
  cTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cTabIcons: {
    tintColor: COLORS.white,
    width: 35,
    height: 35,
  },
  cText: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 4,
  },
});
