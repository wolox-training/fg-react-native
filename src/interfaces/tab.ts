export interface TabIcon {
  focused: HTMLImageElement;
  unfocused: HTMLImageElement;
}

export interface TabRoutes {
  [key: string]: TabIcon;
}
