/// <reference path = "../ScoringItem.ts"/>

class IceBerg1 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Artic/articIceBerg1.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 