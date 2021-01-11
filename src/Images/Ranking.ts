/// <reference path="Images.ts" />

class Ranking extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "ranking";
      this.image = Start.loadNewImage(
        "./assets/img/Highscore/ranking.png"
      );
    }
  }