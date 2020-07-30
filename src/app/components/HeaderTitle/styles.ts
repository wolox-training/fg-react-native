import { StyleSheet } from 'react-native';
import { WHITE } from '@constants/colors';
import { SIZES, WEIGHT_300 } from '@constants/fonts';

export default StyleSheet.create({
  title: {
    fontSize: SIZES.LARGE,
    color: WHITE,
    fontWeight: WEIGHT_300,
    marginLeft: 20,
    marginTop: 20
  }
});
