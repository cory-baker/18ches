import { G } from '@svgdotjs/svg.js';
import { Position, xAxis, yAxis } from '../types/coordinates';
import { COORDINATE_MAP } from '../constants/hex-map';
import testSVG from '../../assets/initial-hexes/A3.svg?raw'
export class HexModel {
  position: Position;
  group: G;

  constructor(position: Position, svg: { raw?: string, js?: G }) {
    this.position = position;
    const [x, y] = this.parsePosition(position);

    if (svg.raw) {
      this.group = new G(testSVG as any as SVGElement).svg(testSVG);
      // this.group.svg(svg.raw)
    } else if (svg.js) {
      this.group = svg.js

    } else {
      throw new Error('Either rawSVGGroup or jsSVG must be provided');
    }
    this.group.transform({
      translateX: this.pixelsFromXAxis(x),
      translateY: this.pixelsFromYAxis(y)
    });
  }

  pixelsFromXAxis(xAxis: xAxis): number {
    // return COORDINATE_MAP.COLUMNS[xAxis as keyof typeof COORDINATE_MAP.COLUMNS] // fix this
    return 100;
  }
  pixelsFromYAxis(yAxis: yAxis): number {
    // return COORDINATE_MAP.ROWS[yAxis as keyof typeof COORDINATE_MAP.ROWS] // fix this
    return 100;
  }

  private parsePosition(position: Position): [xAxis, yAxis] {
    const x = position[0] as xAxis;
    const y = position.slice(1) as yAxis;
    return [x, y];
  }
}
