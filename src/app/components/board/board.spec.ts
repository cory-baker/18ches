import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Board } from './board';
import { BoardService } from '../../services/board.service';
import { describe, beforeEach, it, expect, vi, Mocked } from 'vitest';

describe('Board', () => {
  let component: Board;
  let fixture: ComponentFixture<Board>;
  let boardService: Mocked<BoardService>;

  beforeEach(async () => {
    const boardServiceMock = {
      initializeBoard: vi.fn(),
      allHexes: []
    } as unknown as Mocked<BoardService>;

    await TestBed.configureTestingModule({
      imports: [Board],
      providers: [
        { provide: BoardService, useValue: boardServiceMock }
      ]
    })
      .compileComponents();

    boardService = TestBed.inject(BoardService) as Mocked<BoardService>;
    fixture = TestBed.createComponent(Board);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an SVG element with id "map"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const svg = compiled.querySelector('#map');
    expect(svg).toBeTruthy();
    expect(svg.tagName.toLowerCase()).toBe('svg');
  });

  it('should have correct SVG dimensions', () => {
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('#map');
    expect(svg.getAttribute('width')).toBe('975');
    expect(svg.getAttribute('height')).toBe('702.5');
  });

  it('should have map-hexes group element', () => {
    fixture.detectChanges();
    const mapHexes = fixture.nativeElement.querySelector('#map-hexes');
    expect(mapHexes).toBeTruthy();
  });

  it('should call boardService.initializeBoard on ngAfterViewInit', () => {
    fixture.detectChanges();
    expect(boardService.initializeBoard).toHaveBeenCalled();
  });

  it('should have correct transform on outer g element', () => {
    fixture.detectChanges();
    const outerG = fixture.nativeElement.querySelector('#map > g');
    expect(outerG.getAttribute('transform')).toBe('scale(0.5)');
  });

  it('should have correct transform on map-hexes group', () => {
    fixture.detectChanges();
    const mapHexes = fixture.nativeElement.querySelector('#map-hexes');
    expect(mapHexes.getAttribute('transform')).toBe('translate(50 37.5)');
  });
});
