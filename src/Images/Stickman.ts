/// <reference path="Images.ts" />

class Stickman extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Stickman";
      this.image = Start.loadNewImage(
        "./assets/img/Characters/Stickman/stickman.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }