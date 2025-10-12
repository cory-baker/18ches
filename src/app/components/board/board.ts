import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVG } from '@svgdotjs/svg.js';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board',
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.scss'
})
export class Board implements AfterViewInit {

  constructor(private boardService: BoardService) { }

  ngAfterViewInit() {
    this.boardService.initializeBoard();
    const mapHexes = SVG('#map-hexes');
    this.boardService.allHexes.forEach((hexModel) => {
      mapHexes.add(hexModel.group);
    });
  }
}
