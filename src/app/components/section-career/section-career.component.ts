import { Component } from '@angular/core';

@Component({
  selector: 'app-section-career',
  templateUrl: './section-career.component.html',
  styleUrls: ['./section-career.component.scss']
})
export class SectionCareerComponent {

  redirectToDominionSite(){
    const urlExterna = 'https://dominion-cs.com/en';
    window.open(urlExterna, '_blank');
  }
}
