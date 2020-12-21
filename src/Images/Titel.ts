/// <reference path="Images.ts" />

class Titel extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "Titel";
      this.image = Start.loadNewImage(
        "./assets/img/world/Titel.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }