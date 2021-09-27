import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoggComponent } from './dialogg.component';

describe('DialoggComponent', () => {
  let component: DialoggComponent;
  let fixture: ComponentFixture<DialoggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
