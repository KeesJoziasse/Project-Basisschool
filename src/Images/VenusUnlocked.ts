/// <reference path="Images.ts" />

class VenusUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "VenusUnlocked";
    this.image = Start.loadNewImage("./assets/img/world/VenusUnlocked.png");
  }
}
