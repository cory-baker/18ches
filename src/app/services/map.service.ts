import { STATIC_HEXES_WITH_INITIAL_GRAPHICS, PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS } from "../constants/hex-map";
import { HexModel } from "../models/hex.model";
import { Position } from "../types/coordinates";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private hexes = new Map<Position, HexModel>();

  initializeMap() {
    Object.entries({ ...STATIC_HEXES_WITH_INITIAL_GRAPHICS, ...PLACEABLE_HEXES_WITH_INITIAL_GRAPHICS }).forEach(async ([position, svgFile]) => {
      const hex = new HexModel(position as Position, { raw: svgFile });
      this.hexes.set(position as Position, hex);
    });
  }

  placeTile() {

  }

  get allHexes(): Map<Position, HexModel> {
    return this.hexes;
  }
}
