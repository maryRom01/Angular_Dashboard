import { Component } from '@angular/core';

@Component({
  selector: 'dsh-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  visible: boolean = false;
  showSubMenu: boolean = false;
  navLinks: any[] = [
    {name: 'Dashboard', path: '/dashboard'},
    {name: 'Components', path: '/components'},
    {name: 'Tables', path: '/tables'},
    {name: 'Maps', path: '/maps'},
    {name: 'Menu level 1', path: '/menu-level1'}
  ];

}
