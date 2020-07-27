import React, { useState } from 'react';
import { View, FlatList, ListRenderItem, Text, TouchableOpacity } from 'react-native';
import { CommentProps, CommentListProps } from '@interfaces/commentaries';

import Comment from './components/Comment';
import styles from './styles';

const CommentarySection = ({ data }: CommentListProps) => {
  const [showAll, setShowAll] = useState(false);
  const keyExtractor = ({ id }: CommentProps) => String(id);
  const renderComment: ListRenderItem<CommentProps> = ({ item }) => <Comment item={item} />;
  const list = showAll ? data : data.slice(0, 2);

  return (
    <View style={styles.container}>
      <FlatList<CommentProps> data={list} renderItem={renderComment} keyExtractor={keyExtractor} />
      {!showAll && (
        <TouchableOpacity onPress={() => setShowAll(true)} style={styles.button}>
          <Text style={styles.buttonText}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommentarySection;
