import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss'],
  animations: [
    trigger('slideFromRight', [
      state('void', style({ transform: 'translateX(500px)' })), 
      transition(':enter', [animate('600ms', style({ transform: 'translateX(0)' }))]), // Transición de entrada
    ]),
    trigger('slideFromLeft', [
      state('void', style({ transform: 'translateX(-500px)' })), 
      transition(':enter', [animate('600ms', style({ transform: 'translateX(0)' }))]), // Transición de entrada
    ]),
  ],
})


export class SectionContactComponent {
  @ViewChild('contactSection') contactSection: ElementRef | undefined; //just to link the element
  shouldSlideDown = false;
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.contactSection) {
      const componentPosition = this.contactSection.nativeElement.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight; 
      this.shouldSlideDown = componentPosition > scrollPosition;
    }
  }

  redirectLinkdn(){
    const urlExterna = 'https://www.linkedin.com/in/leonardogurgitano/';
    window.open(urlExterna, '_blank');
  }
}
