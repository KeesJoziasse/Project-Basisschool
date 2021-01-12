/// <reference path="Images.ts" />

class DesertPlanetUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Artic";
      this.image = Start.loadNewImage(
        "./assets/img/world/DesertUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }