/// <reference path="Images.ts" />

class YellowAmongUsUnlocked extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "YellowAmongUsUnlocked";
      this.image = Start.loadNewImage(
        "./assets/img/players/YellowAUUnlocked.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }