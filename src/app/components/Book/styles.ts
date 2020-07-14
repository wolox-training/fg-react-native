import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZES } from '@constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: 375,
    height: 102,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 30,
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row'
  },
  title: {
    fontSize: SIZES.MEDIUM,
    color: COLORS.GREY,
    fontWeight: 'bold'
  },
  author: {
    fontSize: SIZES.SMALL,
    color: COLORS.GREY,
    fontWeight: '300'
  },
  image: {
    height: 60,
    width: 40,
    marginRight: 20
  }
});
