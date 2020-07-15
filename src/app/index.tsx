import React from 'react';
import { View, StatusBar, FlatList, ListRenderItem } from 'react-native';
import Book from '@app/components/Book';
import { BookProps } from '@interfaces/books';
import { BOOK_LIST } from '@constants/books';

import styles from './styles';

const App = () => {
  const keyExtractor = (item: BookProps, _index: number) => item.title;
  const renderBook: ListRenderItem<BookProps> = ({ item }) => (
    <Book title={item.title} author={item.author} image={item.image} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <FlatList<BookProps> data={BOOK_LIST} renderItem={renderBook} keyExtractor={keyExtractor} />
      </View>
    </>
  );
};

export default App;
