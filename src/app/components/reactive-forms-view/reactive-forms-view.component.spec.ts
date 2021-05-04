import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsViewComponent } from './reactive-forms-view.component';

describe('ReactiveFormsViewComponent', () => {
  let component: ReactiveFormsViewComponent;
  let fixture: ComponentFixture<ReactiveFormsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
