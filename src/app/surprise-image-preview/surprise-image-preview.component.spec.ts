import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseImagePreviewComponent } from './surprise-image-preview.component';

describe('SurpriseImagePreviewComponent', () => {
  let component: SurpriseImagePreviewComponent;
  let fixture: ComponentFixture<SurpriseImagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurpriseImagePreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurpriseImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
