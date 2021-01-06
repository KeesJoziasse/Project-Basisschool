/// <reference path="Images.ts" />

class MarsUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "MarsUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/world/MarsUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }