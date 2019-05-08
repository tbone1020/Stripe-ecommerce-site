import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPromotionComponent } from './hot-promotion.component';

describe('HotPromotionComponent', () => {
  let component: HotPromotionComponent;
  let fixture: ComponentFixture<HotPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
