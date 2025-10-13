import { TRACK_GRAPHICS, TRACK_QUANTITIES } from "../constants/tracks";
import { TrackModel } from "../models/track.model";
import { Position } from "../types/coordinates";
import { TrackId } from "../types/track";

export class TrackService {
  tracks = new Map<Position, TrackModel>();
  initializeTracks() {
    Object.entries(TRACK_QUANTITIES).forEach(([trackId, qty]) => {
      const track = new TrackModel(trackId, qty, TRACK_GRAPHICS[trackId as TrackId]);
      // this.hexes.set(`track-${trackId}` as Position, hex);
    })
  }
}
