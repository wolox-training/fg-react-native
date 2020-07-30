import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from '@app/components/HeaderTitle';
import Home from '@app/screens/Home';
import Detail from '@app/screens/Detail';
import Routes from '@constants/routes';
import { LIGHT_BLUE_1 } from '@constants/colors';
import headerImage from '@assets/bc_navbar.png';
import backButtonIcon from '@assets/ic_back.png';

import styles from './styles';

const Stack = createStackNavigator();

const header = () => <Image source={headerImage} style={styles.header} resizeMode="stretch" />;

const backIcon = () => <Image source={backButtonIcon} style={styles.icon} resizeMode="contain" />;

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={LIGHT_BLUE_1} barStyle="light-content" />
      <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ cardStyle: styles.container }}>
        <Stack.Screen
          name={Routes.Home}
          component={Home}
          options={{ headerBackground: header, headerTitle: HeaderTitle }}
        />
        <Stack.Screen
          name={Routes.Detail}
          component={Detail}
          options={{
            headerBackground: header,
            headerTitle: HeaderTitle,
            headerBackImage: backIcon
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
