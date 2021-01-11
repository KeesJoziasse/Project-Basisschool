/// <reference path = "../ScoringItem.ts"/>

class Fish extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = this.loadNewImage("assets/img/GameItems/ocean/oceanFish.png");
    this.points = 5;
    this.lives = 0;
    this.earnedCoins = 0;
  }
}
