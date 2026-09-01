import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiApproachComponent } from './ai-approach.component';
import { RevealDirective } from '../../directives/reveal.directive';

describe('AiApproachComponent', () => {
  let component: AiApproachComponent;
  let fixture: ComponentFixture<AiApproachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiApproachComponent, RevealDirective]
    });
    fixture = TestBed.createComponent(AiApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open on the AI draft', () => {
    expect(component.activeTab).toBe('draft');
  });

  it('should swap the sample when the tab changes', () => {
    const draft = component.sample;
    component.selectTab('shipped');
    fixture.detectChanges();

    expect(component.sample).not.toBe(draft);
    expect(component.sample.lines.some(l => l.text.includes('[Authorize]'))).toBeTrue();
  });

  it('should clear the highlighted note when switching tabs', () => {
    component.activeNote = 2;
    component.selectTab('shipped');

    expect(component.activeNote).toBeNull();
  });

  it('should offer every practice in both languages', () => {
    expect(component.practices.length).toBe(3);
    component.practices.forEach(p => {
      expect(p.title.en.length).toBeGreaterThan(0);
      expect(p.title.es.length).toBeGreaterThan(0);
      expect(p.body.en).not.toBe(p.body.es);
    });
  });

  it('should have an annotation for every marker in both samples', () => {
    (['draft', 'shipped'] as const).forEach(tab => {
      component.selectTab(tab);
      const markers = new Set(
        component.sample.lines.map(l => l.note).filter((n): n is number => !!n)
      );
      const notes = new Set(component.sample.notes.map(n => n.n));
      markers.forEach(m => expect(notes.has(m)).toBeTrue());
    });
  });
});
