/// <reference path="Images.ts" />

class AshUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "AshUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/players/AshUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }