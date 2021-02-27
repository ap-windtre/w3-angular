import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesViewComponent } from './examples-view.component';

describe('ExamplesViewComponent', () => {
  let component: ExamplesViewComponent;
  let fixture: ComponentFixture<ExamplesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
