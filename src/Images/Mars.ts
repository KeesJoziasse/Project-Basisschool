/// <reference path = "Images.ts"/>

class Mars extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "Mars";
        this.image = Start.loadNewImage(
          "./assets/img/world/mars.png"
        );
      }
}