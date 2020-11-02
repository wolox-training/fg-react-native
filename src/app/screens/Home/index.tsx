import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Library from '@app/screens/Library';
import Rentals from '@app/screens/Rentals';
import Routes from '@constants/routes';
import LibraryActiveIcon from '@assets/icLibraryActive.png';
import LibraryIcon from '@assets/icLibrary.png';
import MyRentalsActiveIcon from '@assets/icMyRentalsActive.png';
import MyRentalsIcon from '@assets/icMyRentals.png';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let sourceIcon = null;

          if (route.name === Routes.Library) {
            sourceIcon = focused ? LibraryActiveIcon : LibraryIcon;
          } else if (route.name === Routes.Rentals) {
            sourceIcon = focused ? MyRentalsActiveIcon : MyRentalsIcon;
          }
          return <Image source={sourceIcon} resizeMode="contain" />;
        }
      })}>
      <Tab.Screen name={Routes.Library} component={Library} options={{ title: Routes.Library }} />
      <Tab.Screen name={Routes.Rentals} component={Rentals} options={{ title: Routes.Rentals }} />
    </Tab.Navigator>
  );
}

export default Home;
