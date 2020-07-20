import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@app/screens/Home';
import Detail from '@app/screens/Detail';
import ROUTES from '@constants/routes';

import styles from './styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={{ cardStyle: styles.container }}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.DETAIL} component={Detail} />
      </Stack.Navigator>
    </>
  );
};

export default App;
