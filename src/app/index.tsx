import React from 'react';
import { View } from 'react-native';
import Book from '@app/components/Book';

import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Book
        title="A Little Bird Told Me"
        author="Timothy Cross"
        image="http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg"
      />
    </View>
  );
};

export default App;
