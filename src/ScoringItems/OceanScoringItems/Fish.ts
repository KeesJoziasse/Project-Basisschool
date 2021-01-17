/// <reference path = "../ScoringItem.ts"/>

class Fish extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanFish.png");
    this.points = 5;
    this.lives = 0;
    this.name = "Fish";
    this.earnedCoins = 0;
  }
}
