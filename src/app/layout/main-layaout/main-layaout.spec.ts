import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayaout } from './main-layaout';

describe('MainLayaout', () => {
  let component: MainLayaout;
  let fixture: ComponentFixture<MainLayaout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayaout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayaout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
