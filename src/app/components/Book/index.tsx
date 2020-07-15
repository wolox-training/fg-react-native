import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  image: string;
}

const Book = ({ title, author, image }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: image }} resizeMode={'contain'} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </View>
  );
};

export default Book;
