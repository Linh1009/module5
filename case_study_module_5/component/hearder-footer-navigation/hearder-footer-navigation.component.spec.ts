import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderFooterNavigationComponent } from './hearder-footer-navigation.component';

describe('HearderFooterNavigationComponent', () => {
  let component: HearderFooterNavigationComponent;
  let fixture: ComponentFixture<HearderFooterNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearderFooterNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderFooterNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
