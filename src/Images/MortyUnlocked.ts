/// <reference path="Images.ts" />

class MortyUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "MortyUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/players/MortyUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }