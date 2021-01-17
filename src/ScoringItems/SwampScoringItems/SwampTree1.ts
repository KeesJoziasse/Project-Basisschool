/// <reference path = "../ScoringItem.ts"/>

class SwampTree1 extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Swamp/swampTree1.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 