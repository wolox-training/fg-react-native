import React from 'react';
import { View, Image, Text } from 'react-native';
import { CommentProps } from '@interfaces/commentaries';

import styles from './styles';

interface Props {
  item: CommentProps;
}

function Comment({ item }: Props) {
  const { avatar, author, content } = item;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatar} resizeMode="contain" />
      <View style={styles.text}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
}

export default Comment;
