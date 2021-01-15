/// <reference path = "../ScoringItem.ts"/>

class SeaLion extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Artic/articSeaLion.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 