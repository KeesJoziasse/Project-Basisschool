/// <reference path="Images.ts" />

class SonicUnlockable extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Sonic";
    this.image = Utility.loadNewImage("./assets/img/players/Sonic.png");
  }
}
