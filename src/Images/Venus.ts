/// <reference path = "Images.ts"/>

class ArcticPlanet extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "ArcticPlanet";
        this.image = Start.loadNewImage(
          "./assets/img/world/ArcticPlanet.png"
        );
      }
}