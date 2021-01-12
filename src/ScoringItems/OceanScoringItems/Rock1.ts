/// <reference path = "../ScoringItem.ts"/>

class Rock1 extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/obstacles/Ocean/oceanRock1.png");
    this.points = -10;
    this.lives = -1;
    this.name = "Rock";
    this.earnedCoins = 0;
  }
}
