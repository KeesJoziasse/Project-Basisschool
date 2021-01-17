/// <reference path = "../ScoringItem.ts"/>

class Penguin extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/obstacles/Artic/articPenguin.png");
      this.points = -10;
      this.lives = -1;
      this.earnedCoins = 0;
    }
  } 