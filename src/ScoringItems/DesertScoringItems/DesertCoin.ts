/// <reference path = "../ScoringItem.ts"/>

class DesertCoin extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage(
      "assets/img/obstacles/Desert/desertCoin.png"
    );
    this.points = 15;
    this.lives = 0;
    this.earnedCoins = 1;
  }
}
