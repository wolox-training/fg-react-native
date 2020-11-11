import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Library from '@app/screens/Library';
import Rentals from '@app/screens/Rentals';
import { ROUTES_ICONS, getIcon } from '@constants/icons';
import Routes from '@constants/routes';

const Tab = createBottomTabNavigator();

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image source={getIcon(ROUTES_ICONS[route.name], focused)} resizeMode="contain" />
        )
      })}>
      <Tab.Screen name={Routes.Library} component={Library} options={{ title: Routes.Library }} />
      <Tab.Screen name={Routes.Rentals} component={Rentals} options={{ title: Routes.Rentals }} />
    </Tab.Navigator>
  );
}

export default Screens;
