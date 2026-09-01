import { Component } from '@angular/core';
import { EXPERIENCES, Experience, PROJECTS, Project } from '../../data/portfolio.data';
import { UI } from '../../i18n/i18n';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.scss']
})
export class BackgroundSectionComponent {
  readonly ui = UI;
  experiences: Experience[] = EXPERIENCES;
  projects: Project[] = PROJECTS;

  constructor(public lang: LanguageService) {}
}
