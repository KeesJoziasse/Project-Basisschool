/// <reference path = "../ScoringItem.ts"/>

class Bushes extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Desert/desertBushes.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 