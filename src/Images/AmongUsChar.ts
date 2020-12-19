/// <reference path="Images.ts" />

class AmongUsChar extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "AmongUsLime";
      this.image = Start.loadNewImage(
        "./assets/img/Characters/AmongUs/amongUsLime.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }