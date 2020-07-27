import { StyleSheet } from 'react-native';
import { GREY, DARK_GREY, LIGHT_GREY } from '@constants/colors';
import { SIZES } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15
  },
  text: {
    paddingBottom: 15,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 1
  },
  avatar: {
    marginRight: 19
  },
  author: {
    color: DARK_GREY,
    fontSize: SIZES.SMALL,
    marginBottom: 5
  },
  content: {
    color: GREY,
    fontSize: SIZES.SMALL
  }
});
