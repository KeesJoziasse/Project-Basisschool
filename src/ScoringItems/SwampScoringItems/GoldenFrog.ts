/// <reference path = "../ScoringItem.ts"/>

class GoldenFrog extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Swamp/GoldenFrog.png");
      this.points = 20;
      this.lives = 0;
      this.earnedCoins = 0;
    }
  } 