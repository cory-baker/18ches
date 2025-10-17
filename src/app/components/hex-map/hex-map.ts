import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Hex } from "../hex/hex";
import { CommonModule } from '@angular/common';
import { HexModel } from '../../models/hex.model';
import { MapService } from '../../services/map.service';
import { Position } from '../../types/coordinates';
import { HEX_MAP_WIDTH, HEX_MAP_HEIGHT } from '../../constants/hex-map';

@Component({
  selector: 'app-hex-map',
  imports: [Hex, CommonModule],
  templateUrl: './hex-map.html',
  styleUrl: './hex-map.scss'
})
export class HexMap implements OnInit {
  hexes$: Map<Position, HexModel> = new Map();

  constructor(private mapService: MapService) { }

  ngOnInit() {
    document.documentElement.style.setProperty('--map-width', `${HEX_MAP_WIDTH}px`);
    document.documentElement.style.setProperty('--map-height', `${HEX_MAP_HEIGHT}px`);

    this.mapService.initializeMap();
    this.hexes$ = this.mapService.allHexes;
  }

}

