/// <reference path="Images.ts" />

class OceanImage extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Ocean";
      this.image = Start.loadNewImage(
        "./assets/img/world/ocean.png"
      );
    }
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }