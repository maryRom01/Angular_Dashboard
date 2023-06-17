import { Component } from '@angular/core';

@Component({
  selector: 'dsh-menu-level',
  templateUrl: './menu-level.component.html',
  styleUrls: ['./menu-level.component.scss']
})
export class MenuLevelComponent {
  subLinks: any[] = [
    {name: 'Menu Level 1.1', path: 'menu-level11'},
    {name: 'Menu Level 1.2', path: 'menu-level12'},
    {name: 'Menu Level 1.3', path: 'menu-level13'}
  ];
}
