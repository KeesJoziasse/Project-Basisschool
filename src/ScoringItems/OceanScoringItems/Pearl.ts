/// <reference path = "../ScoringItem.ts"/>

class Pearl extends ScoringItem {
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.image = Utility.loadNewImage(
      "assets/img/GameItems/ocean/oceanParelBooster.png"
    );
    this.points = 20;
    this.lives = 0;
    this.name = "Pearl";
    this.earnedCoins = 0;
  }
}
