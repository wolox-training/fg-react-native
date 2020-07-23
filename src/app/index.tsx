import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@app/screens/Home';
import Detail from '@app/screens/Detail';
import Routes from '@constants/routes';

import styles from './styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ cardStyle: styles.container }}>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Detail} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
