import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
