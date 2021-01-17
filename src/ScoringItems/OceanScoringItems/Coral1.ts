/// <reference path = "../ScoringItem.ts"/>

class Coral1 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = Utility.loadNewImage("assets/img/obstacles/Ocean/oceanCoral1.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 