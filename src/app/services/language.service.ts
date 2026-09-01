import { Injectable } from '@angular/core';
import { I18nText, Lang } from '../i18n/i18n';

const STORAGE_KEY = 'appleo.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  current: Lang = 'en';

  constructor() {
    this.current = this.initialLang();
    this.syncDocument();
  }

  /** Resolve a bilingual string for the language currently on screen. */
  t(text: I18nText): string {
    return text[this.current];
  }

  set(lang: Lang): void {
    if (lang === this.current) {
      return;
    }

    this.current = lang;
    this.syncDocument();

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Private browsing or blocked storage: the choice just won't persist.
    }
  }

  toggle(): void {
    this.set(this.current === 'en' ? 'es' : 'en');
  }

  /** A stored choice wins; otherwise fall back to the browser's language. */
  private initialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'es') {
        return stored;
      }
    } catch {
      // Ignore and fall through to browser detection.
    }

    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  }

  private syncDocument(): void {
    document.documentElement.lang = this.current;
  }
}
