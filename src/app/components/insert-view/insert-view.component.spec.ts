import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertViewComponent } from './insert-view.component';

describe('ItemInputComponent', () => {
  let component: InsertViewComponent;
  let fixture: ComponentFixture<InsertViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
