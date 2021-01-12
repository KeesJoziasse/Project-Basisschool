/// <reference path = "../ScoringItem.ts"/>

class Pearl extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage(
      "assets/img/obstacles/Ocean/oceanPearl.png"
    );
    this.points = 20;
    this.lives = 0;
    this.earnedCoins = 0;
  }
}
