import { G } from '@svgdotjs/svg.js';
import { Position, xAxis, yAxis } from '../types/coordinates';
import { HexModel } from './hex.model';
import { INITIAL_MAP } from '../constants/assets';

export class MapModel extends HexModel {
  position: Position;


  constructor(position: Position, svg: string) {
    super(svg);
    this.position = position;
    const [x, y] = this.parsePosition(position);
    this.id = position;
    this.xPos = this.pixelsFromXAxis(x);
    this.yPos = this.pixelsFromYAxis(y);
  }

  pixelsFromXAxis(xAxis: xAxis): number {
    return MapModel.MAP_AXES_WITH_SPACING.COLUMNS[xAxis as keyof typeof MapModel.MAP_AXES_WITH_SPACING.COLUMNS] // fix this
  }

  pixelsFromYAxis(yAxis: yAxis): number {
    return MapModel.MAP_AXES_WITH_SPACING.ROWS[yAxis as keyof typeof MapModel.MAP_AXES_WITH_SPACING.ROWS] // fix this

  }

  private parsePosition(position: Position): [xAxis, yAxis] {
    const x = position[0] as xAxis;
    const y = position.slice(1) as yAxis;
    return [x, y];
  }

  static readonly LAST_COLUMN_INDEX = 11; // Column L is the 12th column (0-indexed = 11)
  static readonly LAST_ROW_INDEX = 13;    // Row 14 is the 14th row (0-indexed = 13)
  static readonly MAP_WIDTH = HexModel.COLUMN_SPACING_PX * MapModel.LAST_COLUMN_INDEX + HexModel.HEX_PIXEL_WIDTH; // 1110px: Column L position (990px) + hex width (120px)
  static readonly MAP_HEIGHT = HexModel.ROW_SPACING_PX * MapModel.LAST_ROW_INDEX + HexModel.HEX_PIXEL_HEIGHT; // 780px: Row 14 position (676px) + hex height (104px)

  static readonly MAP_AXES_WITH_SPACING = {
    COLUMNS: {
      'A': 0, 'B': HexModel.COLUMN_SPACING_PX, 'C': HexModel.COLUMN_SPACING_PX * 2, 'D': HexModel.COLUMN_SPACING_PX * 3, 'E': HexModel.COLUMN_SPACING_PX * 4, 'F': HexModel.COLUMN_SPACING_PX * 5,
      'G': HexModel.COLUMN_SPACING_PX * 6, 'H': HexModel.COLUMN_SPACING_PX * 7, 'I': HexModel.COLUMN_SPACING_PX * 8, 'J': HexModel.COLUMN_SPACING_PX * 9, 'K': HexModel.COLUMN_SPACING_PX * 10, 'L': HexModel.COLUMN_SPACING_PX * 11
    } as const,

    ROWS: {
      '1': 0, '2': HexModel.ROW_SPACING_PX, '3': HexModel.ROW_SPACING_PX * 2, '4': HexModel.ROW_SPACING_PX * 3, '5': HexModel.ROW_SPACING_PX * 4, '6': HexModel.ROW_SPACING_PX * 5,
      '7': HexModel.ROW_SPACING_PX * 6, '8': HexModel.ROW_SPACING_PX * 7, '9': HexModel.ROW_SPACING_PX * 8, '10': HexModel.ROW_SPACING_PX * 9, '11': HexModel.ROW_SPACING_PX * 10,
      '12': HexModel.ROW_SPACING_PX * 11, '13': HexModel.ROW_SPACING_PX * 12, '14': HexModel.ROW_SPACING_PX * 13
    } as const,
  } as const;

  static readonly STATIC_POSITIONS_WITH_INITIAL_GRAPHICS = {
    'A3': INITIAL_MAP.A3,
    'A7': INITIAL_MAP.A7,
    'A13': INITIAL_MAP.A13,
    'B2': INITIAL_MAP.B2,
    'B12': INITIAL_MAP.mountain,
    'B14': INITIAL_MAP.B14,
    'C5': INITIAL_MAP.C5,
    'C13': INITIAL_MAP.C13,
    'D2': INITIAL_MAP.D2,
    'D8': INITIAL_MAP.D8,
    'D12': INITIAL_MAP.D12,
    'E1': INITIAL_MAP.E1,
    'E3': INITIAL_MAP.E3,
    'E11': INITIAL_MAP.E11,
    'F2': INITIAL_MAP.F2,
    'F4': INITIAL_MAP.F4,
    'F8': INITIAL_MAP.F8,
    'F14': INITIAL_MAP.F14,
    'G1': INITIAL_MAP.G1,
    'G3': INITIAL_MAP.G3,
    'G5': INITIAL_MAP.G5,
    'G13': INITIAL_MAP.G13,
    'H2': INITIAL_MAP.H2,
    'H4': INITIAL_MAP.H4,
    'H6': INITIAL_MAP.H6,
    'H14': INITIAL_MAP.H14,
    'I3': INITIAL_MAP.I3,
    'I5': INITIAL_MAP.I5,
    'I9': INITIAL_MAP.I9,
    'J2': INITIAL_MAP.J2,
    'J4': INITIAL_MAP.J4,
    'J6': INITIAL_MAP.J6,
    'K1': INITIAL_MAP.K1,
    'K3': INITIAL_MAP.K3,
    'K5': INITIAL_MAP.K5,
    'K7': INITIAL_MAP.K7,
    'L2': INITIAL_MAP.L2,
  } as const;

  static readonly PLACEABLE_POSITIONS_WITH_INITIAL_GRAPHICS = {
    'B4': INITIAL_MAP.B4,
    'B6': INITIAL_MAP.empty,
    'B8': INITIAL_MAP.empty,
    'B10': INITIAL_MAP.empty,
    'C3': INITIAL_MAP.empty,
    'C7': INITIAL_MAP.empty,
    'C9': INITIAL_MAP.empty,
    'C11': INITIAL_MAP.empty,
    'D4': INITIAL_MAP.mountain,
    'D6': INITIAL_MAP.mountain,
    'D10': INITIAL_MAP.mountain,
    'E5': INITIAL_MAP.mountain,
    'E7': INITIAL_MAP.empty,
    'E9': INITIAL_MAP.empty,
    'E13': INITIAL_MAP.empty,
    'F6': INITIAL_MAP.empty,
    'F10': INITIAL_MAP.water,
    'F12': INITIAL_MAP.empty,
    'G7': INITIAL_MAP.empty,
    'G9': INITIAL_MAP.water,
    'G11': INITIAL_MAP.water,
    'H12': INITIAL_MAP.water,
    'I7': INITIAL_MAP.empty,
    'J8': INITIAL_MAP.empty,
    'J10': INITIAL_MAP.empty,
    'L4': INITIAL_MAP.empty,
  } as const;

  static readonly ALL_POSITIONS_WITH_INITIAL_GRAPHICS = {
    ...MapModel.STATIC_POSITIONS_WITH_INITIAL_GRAPHICS,
    ...MapModel.PLACEABLE_POSITIONS_WITH_INITIAL_GRAPHICS
  } as const;

  static readonly STATIC_POSITIONS = Object.keys(MapModel.STATIC_POSITIONS_WITH_INITIAL_GRAPHICS) as readonly Position[];
  static readonly PLACEABLE_POSITIONS = Object.keys(MapModel.PLACEABLE_POSITIONS_WITH_INITIAL_GRAPHICS) as readonly Position[];
  static readonly ALL_POSITIONS = Object.keys(MapModel.ALL_POSITIONS_WITH_INITIAL_GRAPHICS) as readonly Position[];

}
