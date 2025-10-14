import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexMap } from './hex-map';

describe('HexMap', () => {
  let component: HexMap;
  let fixture: ComponentFixture<HexMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
