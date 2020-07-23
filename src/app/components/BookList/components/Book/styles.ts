import { StyleSheet } from 'react-native';
import { WHITE, GREY } from '@constants/colors';
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
    flexDirection: 'row'
  },
  text: {
    flex: 1
  },
  title: {
    fontSize: SIZES.MEDIUM,
    color: GREY,
    fontWeight: WEIGHT_BOLD
  },
  author: {
    fontSize: SIZES.SMALL,
    color: GREY,
    fontWeight: WEIGHT_300
  },
  image: {
    height: 60,
    width: 40,
    marginRight: 20
  }
});
