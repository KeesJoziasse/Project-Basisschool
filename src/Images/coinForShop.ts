/// <reference path="Images.ts" />

class coinForShop extends Images {
    public constructor(xPos: number, yPos: number) {
      super(xPos, yPos);
      this.name = "CoinForShop";
      this.image = Start.loadNewImage(
        "./assets/img/GameItems/coinForShop.png"
      );
    }
  
    // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
  }