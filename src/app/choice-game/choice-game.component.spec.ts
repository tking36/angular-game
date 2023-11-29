import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceGameComponent } from './choice-game.component';

describe('ChoiceGameComponent', () => {
  let component: ChoiceGameComponent;
  let fixture: ComponentFixture<ChoiceGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceGameComponent]
    });
    fixture = TestBed.createComponent(ChoiceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
