import React from 'react';
import { View, StatusBar } from 'react-native';
import BookList from '@app/components/BookList';
import { BOOK_LIST } from '@constants/books';

import styles from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BookList data={BOOK_LIST} />
      </View>
    </>
  );
};

export default App;
