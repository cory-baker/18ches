import { Position } from "../types/coordinates";
import { INITIAL_MAP } from "./assets";
export const COORDINATE_MAP = {
  COLUMNS: {
    'A': 100, 'B': 250, 'C': 400, 'D': 550, 'E': 700, 'F': 850,
    'G': 1000, 'H': 1150, 'I': 1300, 'J': 1450, 'K': 1600, 'L': 1750
  } as const,

  ROWS: {
    '1': 100, '2': 186.6, '3': 273.21, '4': 359.81, '5': 446.41, '6': 533.01,
    '7': 619.62, '8': 706.22, '9': 792.82, '10': 879.42, '11': 966.03,
    '12': 1052.63, '13': 1139.23, '14': 1225.83
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
