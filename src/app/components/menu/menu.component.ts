import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
  @Output() goDownCareer = new EventEmitter<void>();
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  
  scrollToSectionCareer() {
    this.goDownCareer.emit();
  }
}
