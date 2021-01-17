/// <reference path = "../ScoringItem.ts"/>

class Skull extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Desert/desertSkull.png");
      this.points = 20;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 