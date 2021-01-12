/// <reference path="Images.ts" />

class DesertPlanetUnlocked extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "DesertUnlocked";
    this.image = Start.loadNewImage("./assets/img/world/DesertUnlocked.png");
  }
}
