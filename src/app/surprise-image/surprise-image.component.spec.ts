import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseImageComponent } from './surprise-image.component';

describe('SurpriseImageComponent', () => {
  let component: SurpriseImageComponent;
  let fixture: ComponentFixture<SurpriseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurpriseImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurpriseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
