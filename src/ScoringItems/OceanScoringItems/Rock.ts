/// <reference path = "../ScoringItem.ts"/>

class Rock extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = Utility.loadNewImage("assets/img/GameItems/ocean/oceanRock1.png");
    this.points = -20;
    this.lives = -1;
    this.name = "Rock";
    this.earnedCoins = 0;
  }
}
