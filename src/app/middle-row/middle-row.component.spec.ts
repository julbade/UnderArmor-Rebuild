import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleRowComponent } from './middle-row.component';

describe('MiddleRowComponent', () => {
  let component: MiddleRowComponent;
  let fixture: ComponentFixture<MiddleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
