import { Component, ElementRef, Input } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';
import { HexModel } from '../../models/hex.model';

@Component({
  selector: 'app-hex',
  imports: [],
  templateUrl: './hex.html',
  styleUrl: './hex.scss'
})
export class Hex {
  @Input() hex!: HexModel;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const nativeHexElement: HTMLElement = this.elementRef.nativeElement;
    nativeHexElement.innerHTML = this.hex.raw;
    nativeHexElement.setAttribute('id', this.hex.id);
    nativeHexElement.setAttribute('class', 'hex')
    nativeHexElement.setAttribute('data-position', this.hex.position);
    // nativeHexElement.setAttribute('tabindex', '0'); // Make focusable
    nativeHexElement.appendChild(this.hex.svg);
    nativeHexElement.style.setProperty('--hex-x-pos', this.hex.xPos + 'px');
    nativeHexElement.style.setProperty('--hex-y-pos', this.hex.yPos + 'px');

  }
}
