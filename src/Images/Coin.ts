/// <reference path="Images.ts" />

class Coin extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Coin";
    this.image = Start.loadNewImage("./assets/img/GameItems/coin.png");
  }
}
