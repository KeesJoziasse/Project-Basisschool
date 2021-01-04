/// <reference path="Images.ts" />

class SwampImage extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Swamp";
      this.image = Start.loadNewImage(
        "./assets/img/world/swamp.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  } 