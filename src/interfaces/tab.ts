import { ImageSourcePropType } from 'react-native';

export interface TabIcon {
  focused: ImageSourcePropType;
  unfocused: ImageSourcePropType;
}

export interface TabRoutes {
  [key: string]: TabIcon;
}
