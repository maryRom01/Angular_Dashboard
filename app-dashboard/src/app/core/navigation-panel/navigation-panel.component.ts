import { Component } from '@angular/core';

@Component({
  selector: 'dsh-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  navLinks: any[] = ['Dashboard', 'Components', 'Tables', 'Maps', 'Menu Level 1']

}
