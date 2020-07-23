import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BookProps, BookListProps } from '@interfaces/books';

import Book from './components/Book';

const BookList = ({ data }: BookListProps) => {
  const keyExtractor = ({ id }: BookProps) => String(id);
  const renderBook: ListRenderItem<BookProps> = ({ item }) => <Book item={item} />;

  return <FlatList<BookProps> data={data} renderItem={renderBook} keyExtractor={keyExtractor} />;
};

export default BookList;
