import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantacalcioComponent } from './fantacalcio.component';

describe('FantacalcioComponent', () => {
  let component: FantacalcioComponent;
  let fixture: ComponentFixture<FantacalcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantacalcioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantacalcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
