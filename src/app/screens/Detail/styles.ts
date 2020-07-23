import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZES, WEIGHT_BOLD, WEIGHT_300 } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
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
  text: {
    flex: 1
  },
  title: {
    fontSize: SIZES.LARGE,
    color: COLORS.GREY,
    fontWeight: WEIGHT_BOLD,
    marginBottom: 5
  },
  data: {
    fontSize: SIZES.SMALL,
    color: COLORS.GREY,
    fontWeight: WEIGHT_300,
    textTransform: 'capitalize'
  },
  available: {
    color: COLORS.GREEN
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
    backgroundColor: COLORS.WHITE,
    color: COLORS.LIGHT_BLUE_1,
    borderColor: COLORS.LIGHT_BLUE_1,
    borderWidth: 2
  },
  buttonSecondary: {
    backgroundColor: COLORS.LIGHT_BLUE_1,
    color: COLORS.WHITE
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: SIZES.SMALL
  },
  textPrimary: {
    color: COLORS.LIGHT_BLUE_1
  },
  textSecondary: {
    color: COLORS.WHITE
  }
});
