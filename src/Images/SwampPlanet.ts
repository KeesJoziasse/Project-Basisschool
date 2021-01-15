/// <reference path = "Images.ts"/>

class SwampPlanet extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "SwampPlanet";
    this.image = Utility.loadNewImage("./assets/img/world/SwampPlanet.png");
  }
}
