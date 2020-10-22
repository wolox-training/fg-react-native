import React from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';
import { BOOK_LIST } from '@constants/books';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <BookList data={BOOK_LIST} />
    </View>
  );
}

export default Home;
