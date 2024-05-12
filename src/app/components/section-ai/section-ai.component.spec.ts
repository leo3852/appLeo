import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAiComponent } from './section-ai.component';

describe('SectionAiComponent', () => {
  let component: SectionAiComponent;
  let fixture: ComponentFixture<SectionAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAiComponent]
    });
    fixture = TestBed.createComponent(SectionAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
