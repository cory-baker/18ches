import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBase } from './hex';

describe('Hex', () => {
  let component: HexBase;
  let fixture: ComponentFixture<HexBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
