/// <reference path = "../ScoringItem.ts"/>

class Fish extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/obstacles/Ocean/oceanFish.png");
    this.points = 20;
    this.lives = 0;
    this.name = "Fish";
    this.earnedCoins = 0;
  }
}
