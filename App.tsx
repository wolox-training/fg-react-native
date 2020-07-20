import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import App from './src/app';

export default function index() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
