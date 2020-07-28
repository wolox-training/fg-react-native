import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import imagePlaceholder from '@assets/img_book6.png';
import { BookProps } from '@interfaces/books';

import { ADD_TO_WISHLIST, RENT, AVAILABLE } from './constants';
import styles from './styles';

function DataSection() {
  const route = useRoute();
  const { title, image, author, genre, year } = route.params as BookProps;
  const sourceImage = image ? { uri: image } : imagePlaceholder;
  // TODO: Remove this.
  const doNothing = () => '';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={sourceImage} resizeMode="contain" />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.data, styles.available]}>{AVAILABLE}</Text>
          <Text style={styles.data}>{author}</Text>
          <Text style={styles.data}>{year}</Text>
          <Text style={styles.data}>{genre}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={doNothing} style={[styles.button, styles.buttonPrimary]}>
        <Text style={[styles.buttonText, styles.textPrimary]}>{ADD_TO_WISHLIST}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={doNothing} style={[styles.button, styles.buttonSecondary]}>
        <Text style={[styles.buttonText, styles.textSecondary]}>{RENT}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DataSection;
