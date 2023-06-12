import { Component } from '@angular/core';

@Component({
  selector: 'dsh-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  menuLevelSubLinks: any[] = [
    {name: 'Menu Level 1.1'},
    {name: 'Menu Level 1.2'},
    {name: 'Menu Level 1.3'}
  ]
  navLinks: any[] = [
    {name: 'Dashboard', subMenu: false},
    {name: 'Components', subMenu: false},
    {name: 'Tables', subMenu: false},
    {name: 'Maps', subMenu: false},
    {name: 'Menu Level 1', subMenu: true, options: this.menuLevelSubLinks}
  ];

}
