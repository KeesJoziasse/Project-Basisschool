/// <reference path="Images.ts" />

class Morty extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Morty";
      this.image = Start.loadNewImage(
        "./assets/img/players/morty.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }