import React from 'react';
import { View, Text, Image } from 'react-native';
import { BookProps } from '@interfaces/books';
import imagePlaceholder from '@assets/img_book6.png';

import styles from './styles';

const Book = ({ title, author, image }: BookProps) => {
  const sourceImage = image ? { uri: image } : imagePlaceholder;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={sourceImage} resizeMode="contain" />
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </View>
  );
};

export default Book;
