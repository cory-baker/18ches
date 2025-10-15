import { Position } from "../types/coordinates";
import { INITIAL_MAP } from "./assets";

// Based on SVG viewBox="-100 -87 200 174" and hexagon geometry
const HEX_SVG_WIDTH = 200;    // SVG units (flat-to-flat)
const HEX_SVG_HEIGHT = 174;   // SVG units (point-to-point)

// Desired hex size in pixels
export const HEX_PIXEL_WIDTH = 120;  // Target hex width in pixels
const HEX_PIXEL_HEIGHT = Math.round(HEX_PIXEL_WIDTH * (HEX_SVG_HEIGHT / HEX_SVG_WIDTH)); // 104px (maintains aspect ratio)

// Hexagonal grid spacing (in pixels)
const COLUMN_SPACING_PX = Math.round(HEX_PIXEL_WIDTH * 0.75); // 90px (3/4 overlap for hex packing)
const ROW_SPACING_PX = Math.round(HEX_PIXEL_HEIGHT * 0.5);    // 52px (half height for hex rows)

export const COORDINATE_MAP = {
  COLUMNS: {
    'A': 0, 'B': COLUMN_SPACING_PX, 'C': COLUMN_SPACING_PX * 2, 'D': COLUMN_SPACING_PX * 3, 'E': COLUMN_SPACING_PX * 4, 'F': COLUMN_SPACING_PX * 5,
    'G': COLUMN_SPACING_PX * 6, 'H': COLUMN_SPACING_PX * 7, 'I': COLUMN_SPACING_PX * 8, 'J': COLUMN_SPACING_PX * 9, 'K': COLUMN_SPACING_PX * 10, 'L': COLUMN_SPACING_PX * 11
  } as const,

  ROWS: {
    '1': 0, '2': ROW_SPACING_PX, '3': ROW_SPACING_PX * 2, '4': ROW_SPACING_PX * 3, '5': ROW_SPACING_PX * 4, '6': ROW_SPACING_PX * 5,
    '7': ROW_SPACING_PX * 6, '8': ROW_SPACING_PX * 7, '9': ROW_SPACING_PX * 8, '10': ROW_SPACING_PX * 9, '11': ROW_SPACING_PX * 10,
    '12': ROW_SPACING_PX * 11, '13': ROW_SPACING_PX * 12, '14': ROW_SPACING_PX * 13
  } as const,
} as const;

export const STATIC_HEXES_WITH_INITIAL_GRAPHICS = {
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

export const PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS = {
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

export const ALL_HEXES_WITH_INITIAL_GRAPHICS = {
  ...STATIC_HEXES_WITH_INITIAL_GRAPHICS,
  ...PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS
} as const;

export const STATIC_HEXES = Object.keys(STATIC_HEXES_WITH_INITIAL_GRAPHICS) as readonly Position[];
export const PLACEABLE_POSITIONS = Object.keys(PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS) as readonly Position[];
export const ALL_HEXES = Object.keys(ALL_HEXES_WITH_INITIAL_GRAPHICS) as readonly Position[];
