import { StyleSheet } from 'react-native';
import { WHITE, GREY, LIGHT_BLUE_1, GREEN } from '@constants/colors';
import { SIZES, WEIGHT_BOLD, WEIGHT_300 } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    marginBottom: 30
  },
  title: {
    fontSize: SIZES.LARGE,
    color: GREY,
    fontWeight: WEIGHT_BOLD,
    marginBottom: 5
  },
  data: {
    fontSize: SIZES.SMALL,
    color: GREY,
    fontWeight: WEIGHT_300,
    textTransform: 'capitalize'
  },
  available: {
    color: GREEN
  },
  image: {
    height: 110,
    width: 80,
    marginRight: 20
  },
  button: {
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 100,
    marginBottom: 10
  },
  buttonPrimary: {
    backgroundColor: WHITE,
    color: LIGHT_BLUE_1,
    borderColor: LIGHT_BLUE_1,
    borderWidth: 2
  },
  buttonSecondary: {
    backgroundColor: LIGHT_BLUE_1,
    color: WHITE
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: SIZES.SMALL
  },
  textPrimary: {
    color: LIGHT_BLUE_1
  },
  textSecondary: {
    color: WHITE
  }
});
