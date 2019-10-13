import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDealsComponent } from './hotel-deals.component';

describe('HotelDealsComponent', () => {
  let component: HotelDealsComponent;
  let fixture: ComponentFixture<HotelDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
