/// <reference path="Images.ts" />

class EndscreenBackground extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "EndscreenBG";
      this.image = Start.loadNewImage(
        "./assets/img/background/EndscreenBackground.jpg"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }