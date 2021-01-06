/// <reference path="Images.ts" />

class StewieUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "StewieUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/players/StewieUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }