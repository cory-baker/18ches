import { Component } from '@angular/core';
import { Board } from '../../components/board/board';
import { TrackHolder } from '../../components/track-holder/track-holder';

@Component({
  selector: 'app-game',
  imports: [Board, TrackHolder],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class Game {

}
