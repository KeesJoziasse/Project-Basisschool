/// <reference path="Images.ts" />

class SonicUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "SonicUnlocked";
    this.image = Utility.loadNewImage("./assets/img/players/SonicUnlocked.png");
  }
}
