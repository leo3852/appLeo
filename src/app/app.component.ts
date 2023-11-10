import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private el: ElementRef) {}
  title = 'appLeo';

  scrollToSectionCareer() {
    const sectionCareer = this.el.nativeElement.querySelector('#sectionCareer');
    sectionCareer.scrollIntoView({ behavior: 'smooth' });
  }
}
