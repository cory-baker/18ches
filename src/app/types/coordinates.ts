import { ALL_HEXES_WITH_INITIAL_GRAPHICS, STATIC_HEXES, COORDINATE_MAP } from "../constants/hex-map";

export type xAxis = keyof typeof COORDINATE_MAP.COLUMNS
export type yAxis = keyof typeof COORDINATE_MAP.ROWS
export type Position = keyof typeof ALL_HEXES_WITH_INITIAL_GRAPHICS;
export type StaticPosition = keyof typeof STATIC_HEXES;
