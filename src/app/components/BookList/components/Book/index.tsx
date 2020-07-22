import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ItemProps } from '@interfaces/books';
import imagePlaceholder from '@assets/img_book6.png';
import ROUTES from '@constants/routes';

import styles from './styles';

const Book = ({ item }: ItemProps) => {
  const sourceImage = item.image ? { uri: item.image } : imagePlaceholder;
  const navigation = useNavigation();
  const handleGoToDetail = () => navigation.navigate(ROUTES.DETAIL, item);

  return (
    <TouchableOpacity onPress={handleGoToDetail} style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={sourceImage} resizeMode="contain" />
        <View style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Book;
