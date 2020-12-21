/// <reference path = "Images.ts"/>

class Unlockable extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "Among Us Yellow";
        this.image = Start.loadNewImage(
          "./assets/img/players/yellowAU.png"
        );
      }
}