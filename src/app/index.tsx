import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@app/screens/Home';
import Detail from '@app/screens/Detail';
import Routes from '@constants/routes';
import { LIGHT_BLUE_1 } from '@constants/colors';
import headerImage from '@assets/bcNavbar.png';
import backButtonIcon from '@assets/icBack.png';

import styles from './styles';

const Stack = createStackNavigator();

const headerBackground = () => <Image source={headerImage} style={styles.header} resizeMode="stretch" />;

const headerBackImage = () => <Image source={backButtonIcon} style={styles.icon} resizeMode="contain" />;

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={LIGHT_BLUE_1} barStyle="light-content" />
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{
          cardStyle: styles.container,
          headerBackground,
          headerBackImage,
          headerTitleStyle: styles.title
        }}>
        <Stack.Screen name={Routes.Home} component={Home} options={{ title: Routes.Home }} />
        <Stack.Screen name={Routes.Detail} component={Detail} options={{ title: Routes.Detail }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
