/// <reference path = "Images.ts"/>

class Venus extends Images {

    public constructor(xPos: number, yPos: number) {
        super(xPos, yPos);
        this.name = "Moon";
        this.image = Start.loadNewImage(
          "./assets/img/world/venus.png"
        );
      }
}