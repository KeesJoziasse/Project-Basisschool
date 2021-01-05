/// <reference path="Images.ts" />

class MoonUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "MoonUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/world/MoonUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }