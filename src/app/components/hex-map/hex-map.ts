import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';
import { Hex } from "../hex/hex";
import { CommonModule } from '@angular/common';
import { HexModel } from '../../models/hex.model';
import { MapService } from '../../services/map.service';
import { Position } from '../../types/coordinates';

@Component({
  selector: 'app-hex-map',
  imports: [Hex, CommonModule],
  templateUrl: './hex-map.html',
  styleUrl: './hex-map.scss'
})
export class HexMap implements OnInit {
  hexes$: Map<Position, HexModel> = new Map();
  readonly fixedWidth = 1110;  // Actual max width: 990px (column L) + 120px (hex width)
  readonly fixedHeight = 781;  // Adjusted: 676px (row 14) + ~94px (accounting for hex positioning)

  constructor(private mapService: MapService) { }

  ngOnInit() {
    // Set CSS custom properties
    document.documentElement.style.setProperty('--map-width', `${this.fixedWidth}px`);
    document.documentElement.style.setProperty('--map-height', `${this.fixedHeight}px`);

    this.mapService.initializeMap();
    this.hexes$ = this.mapService.allHexes;
    window.addEventListener('resize', this.scaleInner);
    this.scaleInner();
  }

  scaleInner() {

    const wrapper = document.querySelector('body') as HTMLElement;
    const inner = document.querySelector('.aspect-container') as HTMLElement;
    if (wrapper && inner) {
      let scale;
      let widthMeetsScale = wrapper.clientWidth >= this.fixedWidth;
      let heightMeetsScale = wrapper.clientHeight >= this.fixedHeight;
      if (!widthMeetsScale && !heightMeetsScale) {
        scale = Math.min((wrapper.clientWidth / this.fixedWidth), (wrapper.clientHeight / this.fixedHeight));
      }
      else if (!widthMeetsScale && heightMeetsScale) {
        scale = (wrapper.clientWidth / this.fixedWidth);
      }
      else if (widthMeetsScale && !heightMeetsScale) {
        scale = (wrapper.clientHeight / this.fixedHeight);
      }
      else if (widthMeetsScale && heightMeetsScale) {
        scale = Math.min((wrapper.clientWidth / this.fixedWidth), (wrapper.clientHeight / this.fixedHeight));
      }
      inner.style.transform = `scale(${scale})`;
    }
  }


}

