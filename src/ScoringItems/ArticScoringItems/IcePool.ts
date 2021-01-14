/// <reference path = "../ScoringItem.ts"/>

class IcePool extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Artic/articIcePool.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 