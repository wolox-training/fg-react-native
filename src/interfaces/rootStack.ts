import { RouteProp } from '@react-navigation/native';
import { BookProps } from '@interfaces/books';
import Routes from '@constants/routes';

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Detail]: BookProps;
};

export type RootProps = RouteProp<RootStackParamList, Routes.Detail>;
