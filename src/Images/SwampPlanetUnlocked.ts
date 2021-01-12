/// <reference path="Images.ts" />

class SwampPlanetUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "SwampUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/world/SwampUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }