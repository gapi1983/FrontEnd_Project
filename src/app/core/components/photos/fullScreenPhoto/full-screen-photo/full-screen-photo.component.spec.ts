import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenPhotoComponent } from './full-screen-photo.component';

describe('FullScreenPhotoComponent', () => {
  let component: FullScreenPhotoComponent;
  let fixture: ComponentFixture<FullScreenPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenPhotoComponent]
    });
    fixture = TestBed.createComponent(FullScreenPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
