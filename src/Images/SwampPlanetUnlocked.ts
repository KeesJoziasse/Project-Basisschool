/// <reference path="Images.ts" />

class SwampPlanetUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "SwampUnlocked";
    this.image = Utility.loadNewImage("./assets/img/world/SwampUnlocked.png");
  }
}
