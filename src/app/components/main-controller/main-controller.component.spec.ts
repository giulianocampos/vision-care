import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControllerComponent } from './main-controller.component';

describe('MainControllerComponent', () => {
  let component: MainControllerComponent;
  let fixture: ComponentFixture<MainControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
