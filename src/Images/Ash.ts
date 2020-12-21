/// <reference path="Images.ts" />

class Ash extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Ash";
      this.image = Start.loadNewImage(
        "./assets/img/players/ash.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }