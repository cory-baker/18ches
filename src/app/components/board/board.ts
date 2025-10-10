import { Component, AfterViewInit } from '@angular/core';
import { BoardModel } from '../../models/board.model';
import { CommonModule } from '@angular/common';
import { SVG } from '@svgdotjs/svg.js';

@Component({
  selector: 'app-board',
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.scss'
})
export class Board implements AfterViewInit {
  basePositions = BoardModel.basePositions;

  ngAfterViewInit() {
    const mapHexes = SVG('#map-hexes');

    this.basePositions.forEach((hexModel, key) => {
      mapHexes.add(hexModel.group);
    });
  }
}
