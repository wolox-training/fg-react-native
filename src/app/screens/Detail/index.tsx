import React from 'react';
import { View } from 'react-native';
import { COMMENTS } from '@constants/commentaries';

import DataSection from './components/DataSection';
import CommentarySection from './components/CommentarySection';
import styles from './styles';

function Detail() {
  return (
    <View style={styles.container}>
      <DataSection />
      <CommentarySection data={COMMENTS} />
    </View>
  );
}

export default Detail;
