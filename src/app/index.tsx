import React from 'react';
import { View, StatusBar, FlatList, ListRenderItem } from 'react-native';
import Book from '@app/components/Book';
import { BookProps } from '@interfaces/books';
import { BOOK_LIST } from '@constants/books';

import styles from './styles';

const App = () => {
  const renderBook = ({ title, author, image }: BookProps) => (
    <Book title={title} author={author} image={image} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <FlatList data={BOOK_LIST} renderItem={renderBook} keyExtractor={item => item.id}/>
      </View>
    </>
  );
};

export default App;
