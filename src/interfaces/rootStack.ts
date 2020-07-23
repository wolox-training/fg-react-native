import { BookProps } from '@interfaces/books';
import Routes from '@constants/routes';

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Detail]: BookProps;
};
