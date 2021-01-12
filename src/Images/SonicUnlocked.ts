/// <reference path="Images.ts" />

class SonicUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "SonicUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/players/SonicUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }