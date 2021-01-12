/// <reference path="Images.ts" />

class ArcticPlanetUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Artic";
      this.image = Start.loadNewImage(
        "./assets/img/world/ArcticUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }