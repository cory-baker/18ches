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

  constructor(private mapService: MapService) { }

  ngOnInit() {
    // Initialize data before view is rendered
    this.mapService.initializeMap();
    this.hexes$ = this.mapService.allHexes;



    const wrapper = document.querySelector('#hex-map') as HTMLElement;
    const inner = document.querySelector('.aspect-container') as HTMLElement;

    function scaleInner() {
      if (wrapper && inner) {
        const scale = wrapper.clientWidth / 1920;
        inner.style.transform = `scale(${scale})`;
      }
    }

    window.addEventListener('resize', scaleInner);
    scaleInner(); // Initial call
  }

  // ngAfterViewInit() {
  //   // DOM manipulation after view is ready
  //   this.mapService.allHexes.forEach((hexModel) => {
  //     // mapHexes.add(hexModel.group);
  //   });
  // }
  //     SVG(test).addTo('#hex').size('100%', '100%');

}
