import { Component } from '@angular/core';
import { UI } from '../../i18n/i18n';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly ui = UI;

  constructor(public lang: LanguageService) {}
}
