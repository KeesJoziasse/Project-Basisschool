/// <reference path="Images.ts" />

class HighScoreTitle extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "highScoreTitle";
    this.image = Start.loadNewImage(
      "./assets/img/Highscore/highScoreTitle.png"
    );
  }
}
