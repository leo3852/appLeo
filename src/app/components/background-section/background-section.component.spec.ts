import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSectionComponent } from './background-section.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { AiApproachComponent } from '../ai-approach/ai-approach.component';
import { LanguageService } from '../../services/language.service';

describe('BackgroundSectionComponent', () => {
  let component: BackgroundSectionComponent;
  let fixture: ComponentFixture<BackgroundSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundSectionComponent, AiApproachComponent, RevealDirective]
    });
    fixture = TestBed.createComponent(BackgroundSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list the current role first', () => {
    expect(component.experiences[0].current).toBeTrue();
    expect(component.experiences[0].company).toContain('TELUS');
  });

  it('should re-render its copy when the language changes', () => {
    const lang = TestBed.inject(LanguageService);
    const text = () => (fixture.nativeElement as HTMLElement).textContent ?? '';

    lang.set('en');
    fixture.detectChanges();
    expect(text()).toContain("Where I've worked");

    lang.set('es');
    fixture.detectChanges();
    expect(text()).toContain('Dónde trabajé');
    expect(text()).not.toContain("Where I've worked");
  });

  it('should provide both languages for every experience and project', () => {
    component.experiences.forEach(exp => {
      expect(exp.summary.en.length).toBeGreaterThan(0);
      expect(exp.summary.es.length).toBeGreaterThan(0);
      expect(exp.summary.en).not.toBe(exp.summary.es);
    });

    component.projects.forEach(p => {
      expect(p.summary.en.length).toBeGreaterThan(0);
      expect(p.summary.es.length).toBeGreaterThan(0);
    });
  });

  it('should render experience, then the AI section, then projects', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = Array.from(compiled.querySelectorAll('section')).map(s => s.id);
    expect(sections).toEqual(['experience', 'approach', 'projects']);
  });
});
