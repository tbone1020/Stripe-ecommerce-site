import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIntroComponent } from './hero-intro.component';

describe('HeroIntroComponent', () => {
  let component: HeroIntroComponent;
  let fixture: ComponentFixture<HeroIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
