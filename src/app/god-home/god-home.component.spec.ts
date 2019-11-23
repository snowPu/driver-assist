import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodHomeComponent } from './god-home.component';

describe('GodHomeComponent', () => {
  let component: GodHomeComponent;
  let fixture: ComponentFixture<GodHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
