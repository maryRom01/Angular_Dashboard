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
    {name: 'Dashboard', path: '/dashboard', subMenu: false},
    {name: 'Components', path: '/components', subMenu: false},
    {name: 'Tables', path: '/tables', subMenu: false},
    {name: 'Maps', path: '/maps', subMenu: false},
    {name: 'Menu level 1', path: '/menu-level1', subMenu: true}
  ];

  showChildren() {
    return this.visible = !this.visible;
  }
}
