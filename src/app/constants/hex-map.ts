import { Position } from "../types/coordinates";
import { ASSET_MAP } from "./assets";
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
  'A3': ASSET_MAP.A3,
  'A7': ASSET_MAP.A7,
  'A13': ASSET_MAP.A13,
  'B2': ASSET_MAP.B2,
  'B12': ASSET_MAP.mountain,
  'B14': ASSET_MAP.B14,
  'C5': ASSET_MAP.C5,
  'C13': ASSET_MAP.C13,
  'D2': ASSET_MAP.D2,
  'D8': ASSET_MAP.D8,
  'D12': ASSET_MAP.D12,
  'E1': ASSET_MAP.E1,
  'E3': ASSET_MAP.E3,
  'E11': ASSET_MAP.E11,
  'F2': ASSET_MAP.F2,
  'F4': ASSET_MAP.F4,
  'F8': ASSET_MAP.F8,
  'F14': ASSET_MAP.F14,
  'G1': ASSET_MAP.G1,
  'G3': ASSET_MAP.G3,
  'G5': ASSET_MAP.G5,
  'G13': ASSET_MAP.G13,
  'H2': ASSET_MAP.H2,
  'H4': ASSET_MAP.H4,
  'H6': ASSET_MAP.H6,
  'H14': ASSET_MAP.H14,
  'I3': ASSET_MAP.I3,
  'I5': ASSET_MAP.I5,
  'I9': ASSET_MAP.I9,
  'J2': ASSET_MAP.J2,
  'J4': ASSET_MAP.J4,
  'J6': ASSET_MAP.J6,
  'K1': ASSET_MAP.K1,
  'K3': ASSET_MAP.K3,
  'K5': ASSET_MAP.K5,
  'K7': ASSET_MAP.K7,
  'L2': ASSET_MAP.L2,
} as const;

export const PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS = {
  'B4': ASSET_MAP.B4,
  'B6': ASSET_MAP.empty,
  'B8': ASSET_MAP.empty,
  'B10': ASSET_MAP.empty,
  'C3': ASSET_MAP.empty,
  'C7': ASSET_MAP.empty,
  'C9': ASSET_MAP.empty,
  'C11': ASSET_MAP.empty,
  'D4': ASSET_MAP.mountain,
  'D6': ASSET_MAP.mountain,
  'D10': ASSET_MAP.mountain,
  'E5': ASSET_MAP.mountain,
  'E7': ASSET_MAP.empty,
  'E9': ASSET_MAP.empty,
  'E13': ASSET_MAP.empty,
  'F6': ASSET_MAP.empty,
  'F10': ASSET_MAP.water,
  'F12': ASSET_MAP.empty,
  'G7': ASSET_MAP.empty,
  'G9': ASSET_MAP.water,
  'G11': ASSET_MAP.water,
  'H12': ASSET_MAP.water,
  'I7': ASSET_MAP.empty,
  'J8': ASSET_MAP.empty,
  'J10': ASSET_MAP.empty,
  'L4': ASSET_MAP.empty,
} as const;

export const ALL_HEXES_WITH_INITIAL_GRAPHICS = {
  ...STATIC_HEXES_WITH_INITIAL_GRAPHICS,
  ...PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS
} as const;

export const STATIC_HEXES = Object.keys(STATIC_HEXES_WITH_INITIAL_GRAPHICS) as readonly Position[];
export const PLACEABLE_POSITIONS = Object.keys(PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS) as readonly Position[];
export const ALL_HEXES = Object.keys(ALL_HEXES_WITH_INITIAL_GRAPHICS) as readonly Position[];
