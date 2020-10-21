import { StyleSheet } from 'react-native';
import { LIGHT_BLUE, WHITE } from '@constants/colors';
import { SIZES, WEIGHT_300 } from '@constants/fonts';
import { BACK_ICON_SIZE } from '@constants/icons';

export default StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BLUE
  },
  header: {
    width: '100%'
  },
  icon: {
    height: BACK_ICON_SIZE,
    width: BACK_ICON_SIZE,
    marginLeft: 13,
    marginTop: 20
  },
  title: {
    fontSize: SIZES.LARGE,
    color: WHITE,
    fontWeight: WEIGHT_300,
    marginLeft: 20,
    marginTop: 20
  }
});
