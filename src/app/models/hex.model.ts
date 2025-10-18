import { G } from "@svgdotjs/svg.js";

export class HexModel {
  declare xPos: number;
  declare yPos: number;
  declare svgElement: SVGElement;
  declare svgString: string;
  declare svgObject: G;
  declare id: string;

  constructor(svg: string) {
    this.svgString = svg;
    this.svgObject = new G().svg(svg);
    this.svgElement = new G().svg(svg).node;
  }

  static readonly HEX_SVG_WIDTH = 200;    // SVG units (flat-to-flat)
  static readonly HEX_SVG_HEIGHT = 174;   // SVG units (point-to-point)
  static readonly HEX_PIXEL_WIDTH = 120;  // Target hex width in pixels
  static readonly HEX_PIXEL_HEIGHT = Math.round(HexModel.HEX_PIXEL_WIDTH * (HexModel.HEX_SVG_HEIGHT / HexModel.HEX_SVG_WIDTH)); // 104px (maintains aspect ratio)
  static readonly COLUMN_SPACING_PX = Math.round(HexModel.HEX_PIXEL_WIDTH * 0.75); // 90px (3/4 overlap for hex packing)
  static readonly ROW_SPACING_PX = Math.round(HexModel.HEX_PIXEL_HEIGHT * 0.5);    // 52px (half height for hex rows)
}
