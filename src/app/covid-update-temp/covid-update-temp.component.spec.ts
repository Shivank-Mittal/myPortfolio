import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidUpdateTempComponent } from './covid-update-temp.component';

describe('CovidUpdateTempComponent', () => {
  let component: CovidUpdateTempComponent;
  let fixture: ComponentFixture<CovidUpdateTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidUpdateTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidUpdateTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
