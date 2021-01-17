/// <reference path = "../ScoringItem.ts"/>

class Coral2 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanCoral2.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  }