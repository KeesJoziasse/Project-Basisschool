/// <reference path = "../ScoringItem.ts"/>

class Rock2 extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/obstacles/Ocean/oceanFish.png");
    this.points = -10;
    this.lives = -1;
    this.earnedCoins = 0;
  }
}