import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { UI } from '../i18n/i18n';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  afterEach(() => localStorage.clear());

  it('should resolve text in the current language', () => {
    service.set('en');
    expect(service.t(UI.experienceTitle)).toBe(UI.experienceTitle.en);

    service.set('es');
    expect(service.t(UI.experienceTitle)).toBe(UI.experienceTitle.es);
  });

  it('should toggle between the two languages', () => {
    service.set('en');
    service.toggle();
    expect(service.current).toBe('es');

    service.toggle();
    expect(service.current).toBe('en');
  });

  it('should persist the choice and keep <html lang> in sync', () => {
    service.set('es');

    expect(localStorage.getItem('appleo.lang')).toBe('es');
    expect(document.documentElement.lang).toBe('es');
  });

  it('should restore a stored choice over browser detection', () => {
    localStorage.setItem('appleo.lang', 'es');
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});

    expect(TestBed.inject(LanguageService).current).toBe('es');
  });
});
