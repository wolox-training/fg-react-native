import React from 'react';
import { ScrollView } from 'react-native';
import { COMMENTS } from '@constants/commentaries';

import DataSection from './components/DataSection';
import CommentarySection from './components/CommentarySection';
import styles from './styles';

function Detail() {
  return (
    <ScrollView style={styles.container}>
      <DataSection />
      <CommentarySection data={COMMENTS} />
    </ScrollView>
  );
}

export default Detail;
