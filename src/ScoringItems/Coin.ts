/// <reference path = "./ScoringItem.ts"/>

class inGameCoin extends ScoringItem {
    public constructor(canvas: HTMLCanvasElement) {
      super(canvas);
      this.image = this.loadNewImage("assets/img/GameItems/coin.png");
      this.points = 10;
      this.lives = 0;
      this.earnedCoins = 1;
    }
  }
  