import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcStringComponent } from './abc-string.component';

describe('AbcStringComponent', () => {
  let component: AbcStringComponent;
  let fixture: ComponentFixture<AbcStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
