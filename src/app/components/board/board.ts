import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexMap } from "../hex-map/hex-map";
import { StockMarket } from "../stock-market/stock-market";
@Component({
  selector: 'app-board',
  imports: [CommonModule, HexMap, StockMarket],
  templateUrl: './board.html',
  styleUrl: './board.scss'
})
export class Board implements OnInit {
  readonly fixedWidth = 1250;
  readonly fixedHeight = 1600;
  readonly borderPadding = 20;

  constructor() { }
  ngOnInit() {
    // Set CSS custom properties
    document.documentElement.style.setProperty('--board-width', `${this.fixedWidth}px`);
    document.documentElement.style.setProperty('--board-height', `${this.fixedHeight}px`);
    document.documentElement.style.setProperty('--border-padding', `${this.borderPadding}px`);
    window.addEventListener('resize', () => this.scaleInner());
    this.scaleInner();
  }

  scaleInner() {
    // Don't scale if user has zoomed the browser
    if (window.devicePixelRatio !== 1) {
      return; // Let browser zoom handle scaling
    }

    const wrapper = document.querySelector('body') as HTMLElement;
    const inner = document.querySelector('.board-container') as HTMLElement;
    if (wrapper && inner) {
      let scale;
      const widthPlusPadding = this.fixedWidth + this.borderPadding * 2;
      const heightPlusPadding = this.fixedHeight + this.borderPadding * 2;

      const widthMeetsScale = wrapper.clientWidth >= widthPlusPadding;
      const heightMeetsScale = wrapper.clientHeight >= heightPlusPadding;
      if (!widthMeetsScale && !heightMeetsScale) {
        scale = Math.min((wrapper.clientWidth / widthPlusPadding), (wrapper.clientHeight / heightPlusPadding));
      }
      else if (!widthMeetsScale && heightMeetsScale) {
        scale = (wrapper.clientWidth / widthPlusPadding);
      }
      else if (widthMeetsScale && !heightMeetsScale) {
        scale = (wrapper.clientHeight / heightPlusPadding);
      }
      else if (widthMeetsScale && heightMeetsScale) {
        scale = Math.min((wrapper.clientWidth / widthPlusPadding), (wrapper.clientHeight / heightPlusPadding));
      }
      inner.style.transform = `scale(${scale})`;
    }
  }
}
