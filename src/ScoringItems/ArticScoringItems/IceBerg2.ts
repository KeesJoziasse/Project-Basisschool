/// <reference path = "../ScoringItem.ts"/>

class IceBerg2 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Artic/articIceBerg2.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 