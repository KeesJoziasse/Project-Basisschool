/// <reference path = "../ScoringItem.ts"/>

class Urn extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Desert/Urn.png");
      this.points = 20;
      this.lives = 0;
      this.earnedCoins = 0;
    }
  } 