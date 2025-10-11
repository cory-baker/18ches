import { SVG, Polygon, G } from '@svgdotjs/svg.js';
import { xAxis, yAxis } from '../types/axis';
import { Axis } from '../types/axis';
import PLE from '../assets/static-hexes/ple.svg';

export class HexModel {
  xPos: xAxis | null = null;
  yPos: yAxis | null = null;
  group: G;

  constructor(params: { x: xAxis, y: yAxis, rawSVGGroup?: string, jsSVG?: G }) {
    this.xPos = params.x;
    this.yPos = params.y;
    if (params.rawSVGGroup) {
      this.group = new G().svg(params.rawSVGGroup).transform({
        translateX: HexModel.COLUMN_POSITIONS[params.x],
        translateY: HexModel.ROW_POSITIONS[params.y]
      });
    } else if (params.jsSVG) {
      this.group = params.jsSVG.transform({
        translateX: HexModel.COLUMN_POSITIONS[params.x],
        translateY: HexModel.ROW_POSITIONS[params.y]
      });
    } else {
      throw new Error('Either rawSVGGroup or jsSVG must be provided');
    }
  }

  private handleRawSVG(rawSvgGroup: string) {
    const draw = SVG();
    this.group = draw.group().svg(rawSvgGroup).transform({
      translateX: HexModel.COLUMN_POSITIONS[this.xPos!],
      translateY: HexModel.ROW_POSITIONS[this.yPos!]
    });
  }

  static generatePLEHex(x: xAxis, y: yAxis,): HexModel {
    const draw = SVG();
    const group = draw.group().svg(PLE)
    return new HexModel(x, y, group);
    // Or pass draw as a parameter
  }

  static generateEmptyHex(x: xAxis, y: yAxis): HexModel {
    this.group = new G({
      fill: '#EFEFD6',
      stroke: 'black',
      opacity: 1,
      transform: `translate(${HexModel.COLUMN_POSITIONS[x]}, ${HexModel.ROW_POSITIONS[y]})`
    });
    this.group.polygon('100,0 50,87 -50,87 -100,0 -50,-87 50,-87');
  }

  static readonly COLUMN_POSITIONS = {
    'A': 100,
    'B': 250,
    'C': 400,
    'D': 550,
    'E': 700,
    'F': 850,
    'G': 1000,
    'H': 1150,
    'I': 1300,
    'J': 1450,
    'K': 1600,
    'L': 1750
  }

  static readonly ROW_POSITIONS = {
    '1': 100,
    '2': 186.6,
    '3': 273.21,
    '4': 359.81,
    '5': 446.41,
    '6': 533.01,
    '7': 619.62,
    '8': 706.22,
    '9': 792.82,
    '10': 879.42,
    '11': 966.03,
    '12': 1052.63,
    '13': 1139.23,
    '14': 1225.83
  }
}
