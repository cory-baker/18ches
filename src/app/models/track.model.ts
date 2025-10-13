import { G } from "@svgdotjs/svg.js";

export class TrackModel {
  trackId: string;
  quantity: number;
  svgGroup: G;

  constructor(trackId: string, quantity: number, svgFile: string) {
    this.trackId = trackId;
    this.quantity = quantity;
    this.svgGroup = new G()
    this.svgGroup.svg(svgFile);
  }
}
