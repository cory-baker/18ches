import { TrackId } from "../types/track";
import { TRACKS } from "./assets";
const baseColumn = 200
const baseRow = 174;
export const INITIAL_TRACK_COORDINATES = {
  columns: { Y2: baseColumn + 100, G3: baseColumn + 400, B5: baseColumn + 700, GD: baseColumn + 1000 },
  rows: { 1: baseColumn, 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '' },
};
export const TRACK_QUANTITIES = { t23: 3, t25: 2 } as const;

export const TRACK_GRAPHICS = Object.keys(TRACKS).reduce((acc, trackID) => {
  acc[trackID] = TRACKS[trackID as TrackId];
  return acc;
}, {} as Record<string, string>);
