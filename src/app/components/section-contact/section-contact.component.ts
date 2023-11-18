import { Component } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {

  redirectLinkdn(){
    const urlExterna = 'https://www.linkedin.com/in/leonardogurgitano/';
    window.open(urlExterna, '_blank');
  }
}
