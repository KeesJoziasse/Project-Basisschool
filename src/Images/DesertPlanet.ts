/// <reference path = "Images.ts"/>

class DesertPlanet extends Images {

  public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "DesertPlanet";
      this.image = Utility.loadNewImage(
        "./assets/img/world/DesertPlanet.png"
      );
    }
}