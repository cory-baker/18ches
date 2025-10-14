import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../../services/board.service';
import { HexMap } from "../hex-map/hex-map";
@Component({
  selector: 'app-board',
  imports: [CommonModule, HexMap],
  templateUrl: './board.html',
  styleUrl: './board.scss'
})
export class Board implements AfterViewInit {

  constructor(private boardService: BoardService) { }

  ngAfterViewInit() {
  }
}
