import React from 'react';
import { Text } from 'react-native';
import { StackHeaderTitleProps } from '@react-navigation/stack';

import styles from './styles';

function HeaderTitle({ children }: StackHeaderTitleProps) {
  return <Text style={styles.title}>{String(children)}</Text>;
}

export default HeaderTitle;
