import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZES, WEIGHT_BOLD, WEIGHT_300 } from '@constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row'
  },
  title: {
    fontSize: SIZES.MEDIUM,
    color: COLORS.GREY,
    fontWeight: WEIGHT_BOLD
  },
  author: {
    fontSize: SIZES.SMALL,
    color: COLORS.GREY,
    fontWeight: WEIGHT_300
  },
  image: {
    height: 60,
    width: 40,
    marginRight: 20
  }
});

export default styles;
