import { Component } from '@angular/core';
import { NavigationPanelLink } from 'src/app/interfaces/navigationPanel';

@Component({
  selector: 'dsh-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  visible: boolean = false;
  navLinks: NavigationPanelLink[] = [
    { name: 'Dashboard', path: '/dashboard', subMenu: false },
    { name: 'Components', path: '/components', subMenu: false },
    { name: 'Tables', path: '/tables', subMenu: false },
    { name: 'Maps', path: '/maps', subMenu: false },
    { name: 'Menu level 1', path: '/dashboard', subMenu: true, subLinks: [
      {name: 'Menu Level 1.1', path: 'menu-level11', subMenu: false},
      {name: 'Menu Level 1.2', path: 'menu-level12', subMenu: false},
      {name: 'Menu Level 1.3', path: 'menu-level13', subMenu: false}
    ]}
  ];

}
