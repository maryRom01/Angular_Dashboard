import { Component } from '@angular/core';

@Component({
  selector: 'dsh-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  showSubMenu: boolean = false;
  navLinks: any[] = [
    {name: 'Dashboard', path: '/dashboard', subMenu: false},
    {name: 'Components', path: '/components', subMenu: false},
    {name: 'Tables', path: '/tables', subMenu: false},
    {name: 'Maps', path: '/maps', subMenu: false},
    {name: 'Menu Level 1', subMenu: true, options: [
      {name: 'Menu Level 1.1', path: '/menu-level11'},
      {name: 'Menu Level 1.2', path: '/menu-level12'},
      {name: 'Menu Level 1.3', path: '/menu-level13'}
    ]}
  ];

}
