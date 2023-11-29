import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureMatchComponent } from './picture-match.component';

describe('PictureMatchComponent', () => {
  let component: PictureMatchComponent;
  let fixture: ComponentFixture<PictureMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureMatchComponent]
    });
    fixture = TestBed.createComponent(PictureMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
