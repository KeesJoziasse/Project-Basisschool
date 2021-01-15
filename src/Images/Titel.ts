/// <reference path="Images.ts" />

class Titel extends Images {
  public constructor(xPos: number, yPos: number) {
    super(xPos, yPos);
    this.name = "Titel";
    this.image = Utility.loadNewImage("./assets/img/world/Titel.png");
  }
}
