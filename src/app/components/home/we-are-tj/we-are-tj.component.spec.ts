import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreTjComponent } from './we-are-tj.component';

describe('WeAreTjComponent', () => {
  let component: WeAreTjComponent;
  let fixture: ComponentFixture<WeAreTjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAreTjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAreTjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
