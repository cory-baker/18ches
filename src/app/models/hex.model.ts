import { SVG, Polygon, G } from '@svgdotjs/svg.js';
export class HexModel {
  xPos: number | null = null;
  yPos: number | null = null;
  group: G;

  constructor(x: number, y: number) {
    this.xPos = x;
    this.yPos = y;
    this.group = new G({
      fill: '#EFEFD6',
      stroke: 'black',
      opacity: 1,
      transform: `translate(${x}, ${y})`
    });
    this.group.polygon('100,0 50,87 -50,87 -100,0 -50,-87 50,-87');
  }
}
