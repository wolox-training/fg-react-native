import React from 'react';
import { View, Text, Image } from 'react-native';
import { BookProps } from '@interfaces/books';

import styles from './styles';

const Book = (props: BookProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: props.image }} resizeMode={'contain'} />
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.author}>{props.author}</Text>
        </View>
      </View>
    </View>
  );
};

export default Book;
