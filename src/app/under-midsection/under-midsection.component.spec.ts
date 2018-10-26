import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMidsectionComponent } from './under-midsection.component';

describe('UnderMidsectionComponent', () => {
  let component: UnderMidsectionComponent;
  let fixture: ComponentFixture<UnderMidsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderMidsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderMidsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
