import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() goDown = new EventEmitter<void>();

  
  scrollToSectionCareer() {
    this.goDown.emit();
  }
}
