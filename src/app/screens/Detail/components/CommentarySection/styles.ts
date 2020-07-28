import { StyleSheet } from 'react-native';
import { WHITE, LIGHT_BLUE_1 } from '@constants/colors';
import { SIZES } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 15
  },
  button: {
    alignItems: 'center',
    paddingVertical: 15
  },
  buttonText: {
    color: LIGHT_BLUE_1,
    fontSize: SIZES.SMALL
  }
});
