import { Component } from '@angular/core';

@Component({
  selector: 'dsh-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  navLinks: any[] = [
    {name: 'Dashboard'},
    {name: 'Components'},
    {name: 'Tables'},
    {name: 'Maps'},
    {name: 'Menu Level 1'}
  ]
}
