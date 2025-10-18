import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Hex } from "../hex/hex";
import { CommonModule } from '@angular/common';
import { MapModel } from '../../models/map.model';
import { MapService } from '../../services/map.service';
import { Position } from '../../types/coordinates';

@Component({
  selector: 'app-hex-map',
  imports: [Hex, CommonModule],
  templateUrl: './hex-map.html',
  styleUrl: './hex-map.scss'
})
export class HexMap implements OnInit {
  hexes$: Map<Position, MapModel> = new Map();

  constructor(private mapService: MapService) { }

  ngOnInit() {
    document.documentElement.style.setProperty('--map-width', `${MapModel.MAP_WIDTH}px`);
    document.documentElement.style.setProperty('--map-height', `${MapModel.MAP_HEIGHT}px`);

    this.mapService.initializeMap();
    this.hexes$ = this.mapService.allHexes;
  }

}

