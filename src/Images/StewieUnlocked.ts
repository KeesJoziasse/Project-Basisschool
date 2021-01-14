/// <reference path="Images.ts" />

class StewieUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "StewieUnlocked";
    this.image = Utility.loadNewImage("./assets/img/players/StewieUnlocked.png");
  }
}
