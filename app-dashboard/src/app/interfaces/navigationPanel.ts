export interface NavigationPanelLink {
  name: string;
  path: string;
  subMenu: boolean;
  subLinks?: NavigationPanelLink[];
}



