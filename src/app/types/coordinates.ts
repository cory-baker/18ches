import { MapModel } from '../models/map.model'

export type xAxis = keyof typeof MapModel.MAP_AXES_WITH_SPACING.COLUMNS
export type yAxis = keyof typeof MapModel.MAP_AXES_WITH_SPACING.ROWS
export type Position = keyof typeof MapModel.ALL_POSITIONS_WITH_INITIAL_GRAPHICS;
export type StaticPosition = keyof typeof MapModel.STATIC_POSITIONS;
