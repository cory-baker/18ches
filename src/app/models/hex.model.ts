import { G } from '@svgdotjs/svg.js';
import { Position, xAxis, yAxis } from '../types/coordinates';
import { COORDINATE_MAP } from '../constants/hex-map';
import testSVG from '../../assets/initial-hexes/A3.svg?raw'
export class HexModel {
  position: Position;
  group: G;
  id: string;
  svg: SVGElement;
  xPos: number;
  yPos: number;
  raw: string;
  constructor(position: Position, svg: { raw?: string, js?: G }) {
    this.position = position;
    const [x, y] = this.parsePosition(position);
    this.id = position;
    if (svg.raw) {
      this.group = new G(testSVG as any as SVGElement).svg(testSVG);
      this.raw = svg.raw;
      // this.group.svg(svg.raw)
    } else if (svg.js) {
      this.group = svg.js
      this.raw = this.group.svg();
    } else {
      throw new Error('Either rawSVGGroup or jsSVG must be provided');
    }
    this.xPos = this.pixelsFromXAxis(x);
    this.yPos = this.pixelsFromYAxis(y);
    this.svg = this.group.node;
  }

  pixelsFromXAxis(xAxis: xAxis): number {
    return COORDINATE_MAP.COLUMNS[xAxis as keyof typeof COORDINATE_MAP.COLUMNS] // fix this

  }
  pixelsFromYAxis(yAxis: yAxis): number {
    return COORDINATE_MAP.ROWS[yAxis as keyof typeof COORDINATE_MAP.ROWS] // fix this

  }

  private parsePosition(position: Position): [xAxis, yAxis] {
    const x = position[0] as xAxis;
    const y = position.slice(1) as yAxis;
    return [x, y];
  }
}
