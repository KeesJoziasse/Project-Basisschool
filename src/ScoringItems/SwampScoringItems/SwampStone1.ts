/// <reference path = "../ScoringItem.ts"/>

class SwampStone1 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Swamp/swampStone1.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 