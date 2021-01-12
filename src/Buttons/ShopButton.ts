/// <reference path="Button.ts" />

class ShopButton extends Button {
  public constructor(xPos: number, yPos: number, canvas:HTMLCanvasElement) {
    super(xPos, yPos, canvas);
    this.name = "Shop";
    this.image = Start.loadNewImage("./assets/img/buttons/shop-button.png");
  }
}
