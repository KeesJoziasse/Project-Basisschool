/// <reference path = "../ScoringItem.ts"/>

class IceBerg3 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Artic/articIceBerg3.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 