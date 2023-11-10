import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-section-career',
  templateUrl: './section-career.component.html',
  styleUrls: ['./section-career.component.scss'],
  animations: [
    trigger('slideFromRight', [
      state('void', style({ transform: 'translateX(500px)' })), 
      transition(':enter', [animate('400ms', style({ transform: 'translateX(0)' }))]), // Transición de entrada
    ]),
  ],
})

export class SectionCareerComponent {
  @ViewChild('careerSection') careerSection: ElementRef | undefined; //just to link the element
  shouldSlideDown = false;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.careerSection) {
      const componentPosition = this.careerSection.nativeElement.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight; 
      this.shouldSlideDown = componentPosition > scrollPosition;
    }
  }


  redirectToDominionSite(){
    const urlExterna = 'https://dominion-cs.com/en';
    window.open(urlExterna, '_blank');
  }

  redirectToPortoServiciosSite(){
    const urlExterna = 'https://www.portoservicios.com.uy/';
    window.open(urlExterna, '_blank');
  }

  redirectToMiddlSoftSite(){
    const urlExterna = 'https://www.middlesoft.com.uy/';
    window.open(urlExterna, '_blank');
  }

  redirectToWundermanSite(){
    const urlExterna = 'https://www.wundermanthompson.com/es/uruguay';
    window.open(urlExterna, '_blank');
  }
}
