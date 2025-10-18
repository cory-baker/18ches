import { Component, ElementRef, Input } from '@angular/core';
import { MapModel } from '../../models/map.model';
import { HexModel } from '../../models/hex.model';

@Component({
  selector: 'app-hex',
  imports: [],
  templateUrl: './hex.html',
  styleUrl: './hex.scss'
})
export class Hex {
  @Input() hex!: MapModel;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const nativeHexElement: HTMLElement = this.elementRef.nativeElement;
    nativeHexElement.innerHTML = this.hex.svgString;;
    nativeHexElement.setAttribute('id', this.hex.id);
    nativeHexElement.setAttribute('class', 'hex')
    nativeHexElement.setAttribute('data-position', this.hex.position);
    // nativeHexElement.setAttribute('tabindex', '0'); // Make focusable
    nativeHexElement.appendChild(this.hex.svgElement);
    nativeHexElement.style.setProperty('--hex-x-pos', this.hex.xPos + 'px');
    nativeHexElement.style.setProperty('--hex-y-pos', this.hex.yPos + 'px');
    nativeHexElement.style.setProperty('--hex-width', HexModel.HEX_PIXEL_WIDTH + 'px');

  }
}
