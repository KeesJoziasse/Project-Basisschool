/// <reference path = "../ScoringItem.ts"/>

class Cactus2 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Desert/Cactus2.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 