/// <reference path="Button.ts" />

class ShopButton extends Button {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Shop";
    this.image = Start.loadNewImage("./assets/img/buttons/shop-button.png");
  }

  // #TODO method maken zodat deze functie je doorverwijst naar de game (playingscreen)
}
