import React from 'react';
import BookList from '@app/components/BookList';
import { BOOK_LIST } from '@constants/books';

function Home() {
  return <BookList data={BOOK_LIST} />;
}

export default Home;
