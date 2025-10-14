import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVG } from '@svgdotjs/svg.js';
import { BoardService } from '../../services/board.service';
import test from '../../../assets/initial-hexes/A3.svg?raw'
import { Map } from "../map/map";
@Component({
  selector: 'app-board',
  imports: [CommonModule, Map],
  templateUrl: './board.html',
  styleUrl: './board.scss'
})
export class Board {

  constructor() { }


}
