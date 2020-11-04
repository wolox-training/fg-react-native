import LibraryActiveIcon from '@assets/icLibraryActive.png';
import LibraryIcon from '@assets/icLibrary.png';
import MyRentalsActiveIcon from '@assets/icMyRentalsActive.png';
import MyRentalsIcon from '@assets/icMyRentals.png';

interface TabIcon {
  focused: HTMLImageElement;
  unfocused: HTMLImageElement;
}

const LIBRARY: TabIcon = {
  focused: LibraryActiveIcon,
  unfocused: LibraryIcon
};

const RENTALS: TabIcon = {
  focused: MyRentalsActiveIcon,
  unfocused: MyRentalsIcon
};

export const getIcon = (icon: TabIcon, focus: Boolean) => (focus ? icon.focused : icon.unfocused);

export const ROUTES_ICONS: any = {
  Library: LIBRARY,
  Rentals: RENTALS
};
