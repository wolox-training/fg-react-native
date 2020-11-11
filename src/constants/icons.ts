import libraryActiveIcon from '@assets/icLibraryActive.png';
import libraryIcon from '@assets/icLibrary.png';
import myRentalsActiveIcon from '@assets/icMyRentalsActive.png';
import myRentalsIcon from '@assets/icMyRentals.png';
import { TabIcon, TabRoutes } from '@interfaces/tab';

export const BACK_ICON_SIZE = 18;

const LIBRARY: TabIcon = {
  focused: libraryActiveIcon,
  unfocused: libraryIcon
};

const RENTALS: TabIcon = {
  focused: myRentalsActiveIcon,
  unfocused: myRentalsIcon
};

export const getIcon = (icon: TabIcon, focus: Boolean) => (focus ? icon.focused : icon.unfocused);

export const ROUTES_ICONS: TabRoutes = {
  Library: LIBRARY,
  Rentals: RENTALS
};
