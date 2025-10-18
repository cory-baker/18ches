import { MapModel } from "../models/map.model";
import { Position } from "../types/coordinates";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private hexes = new Map<Position, MapModel>();

  initializeBoard() {
    Object.entries({ ...MapModel.STATIC_POSITIONS_WITH_INITIAL_GRAPHICS, ...MapModel.PLACEABLE_POSITIONS_WITH_INITIAL_GRAPHICS }).forEach(async ([position, svgFile]) => {
      const hex = new MapModel(position as Position, svgFile);
      this.hexes.set(position as Position, hex);
    });
  }

  placeTile() {

  }

  get allHexes(): Map<Position, MapModel> {
    return this.hexes;
  }
}
