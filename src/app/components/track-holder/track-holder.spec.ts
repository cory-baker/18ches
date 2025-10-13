import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHolder } from './track-holder';

describe('TrackHolder', () => {
  let component: TrackHolder;
  let fixture: ComponentFixture<TrackHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackHolder]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
