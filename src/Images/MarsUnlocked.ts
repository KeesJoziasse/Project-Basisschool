/// <reference path="Images.ts" />

class MarsUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "MarsUnlocked";
    this.image = Utility.loadNewImage("./assets/img/world/MarsUnlocked.png");
  }
}
