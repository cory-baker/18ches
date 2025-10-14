import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hex } from './hex';

describe('Hex', () => {
  let component: Hex;
  let fixture: ComponentFixture<Hex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
