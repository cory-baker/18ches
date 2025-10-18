import { G } from "@svgdotjs/svg.js";
import { Position } from "../types/coordinates";

export class TrackModel {
  trackId: string;
  quantity: number;
  svgGroup: G;
  // position: Position[];
  isOnMap: boolean = false;

  constructor(trackId: string, quantity: number, svgFile: string) {
    this.trackId = trackId;
    this.quantity = quantity;
    this.svgGroup = new G()
    this.svgGroup.svg(svgFile);
  }

  // static readonly ALL
}
