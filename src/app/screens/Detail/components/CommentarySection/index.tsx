import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CommentListProps } from '@interfaces/commentaries';

import Comment from './components/Comment';
import { SHOW_BUTTON } from './constants';
import styles from './styles';

const CommentarySection = ({ data }: CommentListProps) => {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? data : data.slice(0, 2);
  const handleOnPress = () => setShowAll(true);

  return (
    <View style={styles.container}>
      {list.map(item => (
        <Comment key={item.id} item={item} />
      ))}
      {!showAll && (
        <TouchableOpacity onPress={handleOnPress} style={styles.button}>
          <Text style={styles.buttonText}>{SHOW_BUTTON}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommentarySection;
