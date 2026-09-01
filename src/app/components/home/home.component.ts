import { Component } from '@angular/core';
import { UI } from '../../i18n/i18n';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly ui = UI;

  constructor(public lang: LanguageService) {}
}
