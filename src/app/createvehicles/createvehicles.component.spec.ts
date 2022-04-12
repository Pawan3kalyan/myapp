import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevehiclesComponent } from './createvehicles.component';

describe('CreatevehiclesComponent', () => {
  let component: CreatevehiclesComponent;
  let fixture: ComponentFixture<CreatevehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
