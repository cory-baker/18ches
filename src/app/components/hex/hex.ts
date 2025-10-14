import { Component } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';
import test from '../../../assets/initial-hexes/A3.svg?raw'

@Component({
  selector: 'app-hex',
  imports: [],
  templateUrl: './hex.html',
  styleUrl: './hex.scss'
})
export class Hex {
  ngAfterViewInit() {
    // this.boardService.initializeBoard();
    // const container = document.getElementById('board-container'); // or use ViewChild
    SVG(test).addTo('#hex').size('100%', '100%');
    // const mapHexes = draw.svg(test);
    // this.boardService.allHexes.forEach((hexModel) => {
    //   mapHexes.add(hexModel.group);
    // });
  }
}
